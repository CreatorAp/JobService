export default class RabbitMqEventBus {
    private connection;
    private channel;
    connect(): Promise<void>;
    publish(eventName: string, event: any): Promise<void>;
    consume(): void;
}
//# sourceMappingURL=RabbitMqEventBus.d.ts.map