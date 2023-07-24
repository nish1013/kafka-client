import { KafkaService } from "./kafkaService";

async function run() {
  
const kafkaHost = "localhost:9092"; // Replace with your Kafka broker address
const topic = "test-topic"; // Replace with your Kafka topic name
const clientId = "kafka-client"; // Replace with your Kafka client ID

const kafkaService = new KafkaService([kafkaHost], clientId);

const message = "Hello Kafka!";
try {
   // Connect to Kafka
   await kafkaService.connect();

   // Publish a message to the topic
   await kafkaService.publishMessage(topic, message);
 
   // Consume messages from the topic
   kafkaService.consumeMessages(topic, (message: string) => {
     console.log(`Received message: ${message}`);
   });

}  catch (err) {
    console.error("Error occurred:", err);
  } finally {
    // Disconnect from Kafka
    await kafkaService.disconnect();
  }

}

run().catch((err) => {
  console.error("Error occurred:", err);
});

