# Kafka Client - Node.js TypeScript App

**Kafka Client** is a Node.js application written in TypeScript that demonstrates how to use Apache Kafka while adhering to SOLID principles.

## Getting Started

Follow these instructions to set up and run the Kafka Client Node.js TypeScript app.

### Prerequisites

To run this application, you need to have Apache Kafka installed and running on your machine. You can download and install Kafka from the official website: [Apache Kafka](https://kafka.apache.org/downloads).

### Installation

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd kafka-client
```

3. Install the dependencies:

```bash
npm install
```

### Configuration

Before running the app, make sure to update the Kafka configuration in `src/kafkaConfig.ts` with your Kafka broker details:

```typescript
// src/kafkaConfig.ts
export const kafkaConfig = {
  brokers: ["localhost:9092"], // Replace with your Kafka broker(s) information
  clientId: "kafka-client-app",
};
```

### Running the App

To start the application, run the following command:

```bash
npm start
```

This will start the Kafka producer and consumer, demonstrating the interaction between the two.

## Features

- Kafka Producer: Sends messages to a Kafka topic.
- Kafka Consumer: Receives messages from the same Kafka topic.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was created for educational purposes and follows the SOLID principles to demonstrate how to use Kafka with Node.js and TypeScript. Feel free to use and modify it as needed.