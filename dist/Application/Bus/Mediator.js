"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mediator {
    handlers = new Map();
    register(commandName, handler) {
        this.handlers.set(commandName, handler);
    }
    async send(command) {
        console.log("COMMAND:", command.constructor.name);
        console.log("HANDLERS:", [...this.handlers.keys()]);
        //const commandName = command.commandName;
        console.log("command", command.constructor.name);
        const handler = this.handlers.get(command.constructor.name);
        if (!handler) {
            throw new Error("Handler not found");
        }
        return await handler.handle(command);
    }
}
exports.default = Mediator;
//# sourceMappingURL=Mediator.js.map