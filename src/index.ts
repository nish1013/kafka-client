import { KafkaService } from "./kafkaService";
import { kafkaConfig } from "./kafkaConfig";

async function run() {
  
const kafkaService = new KafkaService(kafkaConfig.brokers, kafkaConfig.clientId);

const message = "Hello Kafka!";
try {
   // Connect to Kafka
   await kafkaService.connect();

   // Publish a message to the topic
   await kafkaService.publishMessage(kafkaConfig.topic, message);
 
   // Consume messages from the topic
   kafkaService.consumeMessages(kafkaConfig.topic, (message: string) => {
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

