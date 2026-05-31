const Websocket = require('ws');

const wsUrl = 'wss://stream.binance.com:9443/ws/bnbbtc@depth';

// 1. create new socket
const ws = new Websocket(wsUrl);

// 2. open socket
ws.on('open', () => {
	console.log("socket opened");
});

// 3. start listening
ws.on('message', (data) => {
	try{
		console.log("receiving data");
		const eventData = JSON.parse(data);
		console.log("data block ", eventData);
	}
	catch (error) {
		error.log("error processing data ", error);
	}
});

// 4.error socket
ws.on('error', () => {
	console.log("Websocket error: ", error);
});

// 5. close socket
ws.on('close', () => {
	console.log("Websocket closed");
});
