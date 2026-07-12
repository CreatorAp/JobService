// import express from 'express';
import express  from "express";
import JoBController from "./Api/Controller/JobController";
import Mediator from "./Application/Bus/Mediator";
import CreateJobHandler from "./Application/Jobs/Commands/CreateJob/CreateJobHandler";
import JobRepository from "./Infra/Repository/JobRepository";
import RabbitMqEventBus from "./Infra/EventBus/RabbitMqEventBus";
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());



const mediator = new Mediator();
const jobController = new JoBController(mediator);
const repository = new JobRepository();
const eventBus = new RabbitMqEventBus();

console.log("SERVER MEDIATOR", mediator);

//eventBus.connect();

mediator.register("CreateJobCommand", 
    new CreateJobHandler(
        repository,
        eventBus
    )
)


app.get("/", (req, res) => {
    console.log("HOME");
    res.send("Servidor OK");
});

app.post("/api/jobs/create", (req, res) => {
    console.log("POST CHEGOU");
    // res.send("OK");
    jobController.CreateJob(req, res);
});

// app.post("/api/jobs/create", (req, res) =>   
//     jobController.CreateJob(req, res)
// );

app.listen(3000, () => {
    console.log("Jobs Service ");
});