"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = __importDefault(require("amqplib"));
class RabbitMqEventBus {
    connection = null;
    channel = null;
    async connect() {
        this.connection = await amqplib_1.default.connect("amqp://localhost");
        this.channel = await this.connection.createChannel();
    }
    async publish(eventName, event) {
        if (!this.channel) {
            throw new Error("Channel not connected");
        }
        const exchange = "jobs";
        await this.channel.assertExchange(exchange, "topic", {
            durable: true
        });
        // this.channel.publish(
        //     exchange,
        //     eventName,
        //     Buffer.from(JSON.stringify(event))
        // );
        const ok = this.channel.publish(exchange, eventName, Buffer.from(JSON.stringify(event)));
        console.log("Publish retornou:", ok);
        console.log("PUBLICANDO");
        console.log("Exchange:", exchange);
        console.log("Routing Key:", eventName);
    }
    consume() {
    }
}
exports.default = RabbitMqEventBus;
//# sourceMappingURL=RabbitMqEventBus.js.map