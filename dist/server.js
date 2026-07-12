"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
const express_1 = __importDefault(require("express"));
const JobController_1 = __importDefault(require("./Api/Controller/JobController"));
const Mediator_1 = __importDefault(require("./Application/Bus/Mediator"));
const CreateJobHandler_1 = __importDefault(require("./Application/Jobs/Commands/CreateJob/CreateJobHandler"));
const JobRepository_1 = __importDefault(require("./Infra/Repository/JobRepository"));
const RabbitMqEventBus_1 = __importDefault(require("./Infra/EventBus/RabbitMqEventBus"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const mediator = new Mediator_1.default();
const jobController = new JobController_1.default(mediator);
const repository = new JobRepository_1.default();
const eventBus = new RabbitMqEventBus_1.default();
console.log("SERVER MEDIATOR", mediator);
eventBus.connect();
mediator.register("CreateJobCommand", new CreateJobHandler_1.default(repository, eventBus));
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
//# sourceMappingURL=server.js.map