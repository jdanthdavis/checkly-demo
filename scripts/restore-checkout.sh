#!/usr/bin/env bash
set -euo pipefail

FILE="server.js"

if [[ ! -f "$FILE" ]]; then
  echo "Missing $FILE" >&2
  exit 1
fi

python3 - "$FILE" <<'PY'
from pathlib import Path
path = Path('server.js')
text = path.read_text()
old = """          document.addEventListener('DOMContentLoaded', () => {
            const checkoutButton = document.getElementById('checkout-button');
            if (checkoutButton) {
              checkoutButton.addEventListener('click', () => {
                throw new Error('Checkout button intentionally broken for the demo');
              });
            }
          });"""
new = """          document.addEventListener('DOMContentLoaded', () => {
            const checkoutButton = document.getElementById('checkout-button');
            if (checkoutButton) {
              checkoutButton.addEventListener('click', () => {
                const confirmation = document.createElement('p');
                confirmation.textContent = 'Order confirmed. Thank you!';
                document.body.appendChild(confirmation);
              });
            }
          });"""
if old in text:
    path.write_text(text.replace(old, new))
    print(f"Restored the normal checkout behavior in {path}.")
else:
    print(f"The checkout button is already restored in {path}.")
PY
