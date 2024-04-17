Certainly! Here's an example of how you can establish an authenticated MQTT connection using the mqtt library in Node.js:

Install MQTT Library:
First, make sure you have the mqtt library installed. You can install it using npm:

bash
Copy code
npm install mqtt
Create Node.js Script:
Create a Node.js script (e.g., mqtt_client.js) and use the following code as a template:

javascript
Copy code
const mqtt = require('mqtt');
const fs = require('fs');

const caCert = fs.readFileSync('path/to/ca.crt');
const clientCert = fs.readFileSync('path/to/client.crt');
const clientKey = fs.readFileSync('path/to/client.key');

const options = {
  clientId: 'your_client_id',
  protocol: 'mqtts', // Use 'mqtts' for secure connection
  ca: caCert,
  cert: clientCert,
  key: clientKey,
};

const client = mqtt.connect('mqtt://broker_address', options); // Replace with your broker address

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  // Subscribe to topics or perform other actions here
  // client.subscribe('topic');
});

client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

client.on('error', (error) => {
  console.error('Error:', error);
});

client.on('close', () => {
  console.log('Connection closed');
});

// Uncomment this line to publish a message after connecting
// client.publish('topic', 'Hello, MQTT!');
Replace 'path/to/ca.crt', 'path/to/client.crt', 'path/to/client.key', 'your_client_id', and 'broker_address' with the actual paths, client ID, and broker address you have.

Run the Script:
Open your terminal, navigate to the directory containing the script, and run it using the following command:

bash
Copy code
node mqtt_client.js
This script establishes a secure MQTT connection using the provided certificates and keys. It subscribes to a topic (you can uncomment the client.subscribe('topic') line) and listens for incoming messages. You can also uncomment the client.publish line to publish a message after connecting.

Please ensure that you have replaced placeholders with the actual paths and details relevant to your setup. Additionally, adapt the code as needed based on your use case and MQTT broker requirements.




