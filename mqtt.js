const fs = require('fs');
const path = require('path'); // Import the 'path' module
const mqtt = require('mqtt');
const { v4: uuidv4 } = require('uuid'); // Import the UUID v4 generator

const caFile = fs.readFileSync(path.join(__dirname, 'ca.crt'), 'utf8');
const certFile = fs.readFileSync(path.join(__dirname, 'client.crt'), 'utf8');
const keyFile = fs.readFileSync(path.join(__dirname, 'client.key'), 'utf8');

const clientId = uuidv4();
console.log("clientId",clientId);

const options = {
  port: 8883,
  clientId: clientId,
//   rejectUnauthorized: false,
  ca: caFile,
  cert: certFile,
  key: keyFile,
};

const client = mqtt.connect('mqtts://broker.hivemq.com:8u83', options);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

client.on('error', (error) => {
  console.error('MQTT Error:', error);
});
