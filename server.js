const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>Astronomy Shop Demo</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; background: #f4f7fb; color: #1e293b; }
          .card { max-width: 760px; margin: 0 auto; background: white; border-radius: 12px; padding: 32px; box-shadow: 0 8px 20px rgba(15,23,42,0.08); }
          h1 { color: #0f172a; }
          button { background: #2563eb; color: white; border: none; border-radius: 8px; padding: 10px 18px; font-size: 16px; cursor: pointer; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Astronomy Shop</h1>
          <p>Explore the stars with premium gear for your next adventure.</p>
          <input type="text" value="Moon telescope" aria-label="search" style="padding: 10px; width: 220px; margin-right: 8px;" />
          <button>Add to cart</button>
          <div style="margin-top: 20px;">
            <h2>Featured products</h2>
            <ul>
              <li>Moon Telescope</li>
              <li>Planetary Lens Kit</li>
              <li>Deep Space Backpack</li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.get('/api/products', (req, res) => {
  res.json({
    products: [
      { id: 1, name: 'Moon Telescope', price: 299 },
      { id: 2, name: 'Planetary Lens Kit', price: 149 },
      { id: 3, name: 'Deep Space Backpack', price: 89 }
    ]
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Astronomy Shop demo running at http://0.0.0.0:${PORT}`);
});
