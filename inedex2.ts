const Websocket = require('ws');

const wsUrl = 'wss://stream.binance.com:9443/ws/bnbbtc@depth';

const ws = new Websocket(wsUrl);

ws.on('open', () => {
	console.log("socket opened");
});

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

ws.on('error', () => {
	console.log("Websocket error: ", error);
});

ws.on('close', () => {
	console.log("Websocket closed");
});
