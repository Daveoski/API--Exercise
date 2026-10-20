# Async API Exercises (JavaScript)

Small Node.js scripts for practising `fetch`, `async`/`await`, parallel requests and error handling against public REST APIs.

| Script | What it shows |
| ------ | ------------- |
| [`advice.js`](advice.js) | A basic `fetch` call to the Advice Slip API |
| [`country-info.js`](country-info.js) | Shapes a REST Countries response into a clean object (capital, population, currency) and handles countries that aren't found |
| [`dashboard.js`](dashboard.js) | Runs three API calls in parallel with `Promise.all` and times the round trip |
| [`safe-fetch.js`](safe-fetch.js) | A reusable `safeFetch` wrapper that returns `{ ok, data }` or `{ ok, message }` instead of throwing |

## Running

Requires Node.js 18+ (built-in `fetch`):

```bash
node dashboard.js
```

## License

[MIT](LICENSE)
