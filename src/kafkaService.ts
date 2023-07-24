// src/kafkaClient.ts

import { Kafka, Consumer, Producer, ProducerRecord } from "kafkajs";

export class KafkaService {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;

  constructor(brokers: string[], clientId: string) {
    this.kafka = new Kafka({ brokers, clientId });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: clientId });
  }

  public async connect(): Promise<void> {
    await this.producer.connect();
    await this.consumer.connect();
  }

  public async disconnect(): Promise<void> {
    await this.producer.disconnect();
    await this.consumer.disconnect();
  }

  public async publishMessage(topic: string, message: string): Promise<void> {
    const record: ProducerRecord = {
      topic,
      messages: [{ value: message }],
    };
    await this.producer.send(record);
  }

  public async consumeMessages(
    topic: string,
    onMessage: (message: string) => void
  ): Promise<void> {
    await this.consumer.subscribe({ topic });
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        onMessage(message.value?.toString() || '');
      },
    });
  }
}
