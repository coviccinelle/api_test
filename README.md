# Binance Real-Time Order Book Monitor

A minimalist Node.js script that connects to the Binance WebSocket API to stream real-time Order Book (`@depth`) data for the BNB/BTC pair, featuring automatic reconnection logic.

## Features

*   **Real-time Streaming:** Listens to live Binance Order Book events via WebSockets.
*   **Zero Bloat:** Pure JavaScript with a single external dependency (`ws`).

## Installation

1. Clone or download this repository.
2. Install the required WebSocket library:

```bash
npm install ws
```

## Usage:
```bash
node index.js
```
p/s: this is what I couldn't do during a tech test 27/05/2026. such a shame, but it's never too late to learn, it's life.
Don't forget this lesson pleaseeeee
