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

		const time = new Date(eventData.E).toLocaleTimeString();

		
		let highestBid = 0; 
		let highestAsk = 0; 
		highestBid = eventData.b[0] ? eventData.b[0][0] : 'N/A'; //highest buying price
		lowestAsk = eventData.a[0] ? eventData.a[0][0] : 'N/A'; //lowest seliing price

		console.log(`[${time}] BNB/BTC | Best Bid: ${highestBid} | Best Ask: ${lowestAsk}`);

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
