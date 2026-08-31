# Twilio Voice

Minimal Twilio voice demo that exposes a webhook response and a separate outbound-call script.

## About

This repo contains two small Twilio examples: one Express webhook that returns a spoken greeting, and one Node script that creates an outbound call. It is best described as a hands-on integration sample rather than a production application.

## Key Features

- Voice webhook that returns TwiML
- Outbound call example using the Twilio Node SDK
- Very small surface area, useful for testing account setup

## Architecture

- `server.js` hosts the `/voice` webhook on port `1337`
- `twiliocall.js` uses the Twilio REST client to create a call
- `index.js` is present as a separate entry file, but the repo does not define a script for it

## Tech Stack

- Node.js
- Express
- Twilio Node SDK

## Prerequisites

- Node.js
- A Twilio account

## Installation

1. Install dependencies in the repository root.
2. Configure Twilio credentials before running the outbound-call script.

## Configuration

- `twiliocall.js` currently contains hard-coded placeholder values that should be externalized before publication

## How to Run

```bash
npm install
node server.js
node twiliocall.js
```

## Example Usage

- Send a POST request to `/voice` to receive a TwiML response
- Run `twiliocall.js` to place a sample call

## Project Structure

- `server.js` - Express webhook server
- `twiliocall.js` - outbound call script
- `index.js` - additional entry file in the workspace

## Current Status

Experimental. The repo looks like a demo or trial setup rather than a polished application.

## Limitations

- Credentials are not externalized
- No tests
- No start script

## License

No explicit license file was found.
