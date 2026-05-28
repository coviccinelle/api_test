const Websocket = require('ws');

const wsUrl = 'wss://stream.binance.com:9443/ws/bnbbtc@depth';

// start connection
const ws = new Websocket(wsUrl);

// event when connection starblished

ws.on('open', () => {
	console.log('Connection etablished to Binance Websocket!');
});

// event when received data
ws.on('message', (data) => {
	try {
		const eventData = JSON.parse(data);

		// structure data of Binance: p = price, q = quantity, t = time
		console.log(`[${new Date(eventData.T).toLocaleTimeString()}] BTC Price: $${parseFloat(eventData.p).toFixed(2)} | Vol: ${eventData.q}`);
	} catch (error) {
		console.error('Error parsing JSON:', error);
	}
});

// process when error
ws.on('error', (error) => {
	console.error('Error connection: ', error);
});

// process error when having a closed connection
ws.on('close', () => {
	console.log('Socket connection is closed, try try to reconnect?');
});
