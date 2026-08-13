const express = require('express');

const app = express();
const PORT = process.env.PORT || 8081;
const startedAt = Date.now();

app.get('/', (req, res) => {
  res.json({
    service: 'astronomy-heartbeat-api',
    status: 'ok',
    uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000),
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'astronomy-heartbeat-api',
    timestamp: new Date().toISOString(),
  });
});

app.get('/ping', (req, res) => {
  res.json({ ok: true, service: 'astronomy-heartbeat-api' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Heartbeat API running at http://0.0.0.0:${PORT}`);
});
