const Websocket = require('ws');

const wsUrl = 'wss://stream.binance.com:9443/ws/bnbbtc@depth';

// 1. start connection
const ws = new Websocket(wsUrl);

// 2. event when connection starblished

ws.on('open', () => {
	console.log('Connection etablished to Binance Websocket!');
});

// 3. event when received data
ws.on('message', (data) => {
	try {
		const eventData = JSON.parse(data);

		const time = new Date(eventData.E).toLocaleTimeString();

		let highestBid = eventData.b[0] ? eventData.b[0][0] : 'N/A'; //highest buying price
		let lowestAsk = eventData.a[0] ? eventData.a[0][0] : 'N/A'; //lowest seliing price

		console.log(`[${time}] BNB/BTC | Best Bid: ${highestBid} | Best Ask: ${lowestAsk}`);

	} catch (error) {
		console.error('Error parsing JSON:', error);
	}
});

// 4. process when error
ws.on('error', (error) => {
	console.error('Error connection: ', error);
});

// 5. process error when having a closed connection
ws.on('close', () => {
	console.log('Socket connection is closed, try to reconnect?');
});
