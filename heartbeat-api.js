const express = require('express');

const app = express();
const PORT = process.env.PORT || 8081;
const startedAt = Date.now();
const heartbeatUrl = process.env.CHECKLY_HEARTBEAT_URL;
const heartbeatIntervalMs = Number(process.env.HEARTBEAT_INTERVAL_MS || 30000);

function sendHeartbeat() {
  if (!heartbeatUrl) {
    return;
  }

  fetch(heartbeatUrl)
    .then((response) => {
      if (!response.ok) {
        console.warn(`Heartbeat ping failed with status ${response.status}`);
      } else {
        console.log(`Heartbeat ping sent successfully at ${new Date().toISOString()}`);
      }
    })
    .catch((error) => {
      console.error('Heartbeat ping error:', error.message);
    });
}

if (heartbeatUrl) {
  sendHeartbeat();
  setInterval(sendHeartbeat, heartbeatIntervalMs);
}

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
  sendHeartbeat();
  res.json({ ok: true, service: 'astronomy-heartbeat-api' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Heartbeat API running at http://0.0.0.0:${PORT}`);
  if (heartbeatUrl) {
    console.log(`Heartbeat URL configured: ${heartbeatUrl}`);
  }
});
