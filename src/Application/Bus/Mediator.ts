

export default class Mediator{

    public handlers = new Map();

    register(commandName: string , handler : any ){
        this.handlers.set(commandName, handler);
        
    }

    async send(command: any){

        console.log("COMMAND:", command.constructor.name);
console.log("HANDLERS:", [...this.handlers.keys()]);
        //const commandName = command.commandName;
        console.log("command",command.constructor.name);
        const handler = this.handlers.get(command.constructor.name ); 

        if (!handler){
            throw new Error("Handler not found");
        }
        return await handler.handle(command);
    }

}