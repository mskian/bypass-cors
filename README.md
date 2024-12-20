# 🌐 CORS Bypass Proxy - Simple and Fast Cross-Origin Requests 🚀  

![build-test](https://github.com/mskian/bypass-cors/workflows/build-test/badge.svg)  

🌍 Bypass CORS restrictions easily with a simple proxy. Make fast cross-origin requests for better API access without complications ⚡  

**Note**  

I primarily built this tool for personal use, and I mostly run it on my home server or localhost.This tool is not recommended for production use, as it lacks additional security layers such as header authentication, API keys, or token methods to prevent unauthorized access. However, you are welcome to fork the project and make any changes as needed.  

## Setup

- Download or Clone the repo
- install dependencies

```sh
pnpm install
```

- Development

```sh
pnpm dev
```

- Build a Project

```sh
pnpm build
```

- Start the server

```sh
pnpm start
```

## Routes

- `/` - Static Home Page for test the Proxy in Real-time
- `/api/bypass` - proxy

## API Usage

- Bypass CORS blocking api

```sh
curl http://localhost:6028/api/bypass?url=https://example.com
```

## Disclaimer

This CORS Bypass Proxy API is provided as a simple solution to bypass CORS restrictions for personal and educational use. It is not intended for production environments or heavy traffic. Use responsibly and ensure compliance with the terms and conditions of any APIs you interact with. The project is provided "as is" without any warranties or guarantees.  

## LICENSE

MIT
