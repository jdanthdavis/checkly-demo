const { spawn } = require('child_process');

const child = spawn('node', ['server.js'], {
  env: {
    ...process.env,
    PORT: process.env.PORT || '8080',
    BREAK_CHECKOUT_BUTTON: 'true',
  },
  stdio: 'inherit',
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
