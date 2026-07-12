export default class Mediator {
    handlers: Map<any, any>;
    register(commandName: string, handler: any): void;
    send(command: any): Promise<any>;
}
//# sourceMappingURL=Mediator.d.ts.map