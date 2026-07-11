import amqp from 'amqplib';

export default class RabbitMqEventBus {
    private connection : amqp.ChannelModel | null = null;
    private channel : amqp.Channel | null = null;

    async connect (){
        this.connection = await amqp.connect("amqp://localhost");

        this.channel = await this.connection.createChannel();
    }

    async publish(eventName : string, event: any)  : Promise<void>{
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
    const ok = this.channel.publish(
    exchange,
    eventName,
    Buffer.from(JSON.stringify(event))
);

console.log("Publish retornou:", ok);

    console.log("PUBLICANDO");
console.log("Exchange:", exchange);
console.log("Routing Key:", eventName);
    }

    consume(){

    }

}