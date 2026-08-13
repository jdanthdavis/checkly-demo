#!/usr/bin/env bash
set -euo pipefail

FILE="server.js"
TEMP="${FILE}.tmp"

if [[ ! -f "$FILE" ]]; then
  echo "Missing $FILE" >&2
  exit 1
fi

if grep -q "throw new Error('Checkout button intentionally broken for the demo')" "$FILE"; then
  echo "The checkout button is already broken in $FILE."
  exit 0
fi

python3 - "$FILE" <<'PY'
from pathlib import Path
path = Path('server.js')
text = path.read_text()
old = """          document.addEventListener('DOMContentLoaded', () => {
            const checkoutButton = document.getElementById('checkout-button');
            if (checkoutButton) {
              checkoutButton.addEventListener('click', () => {
                const confirmation = document.createElement('p');
                confirmation.textContent = 'Order confirmed. Thank you!';
                document.body.appendChild(confirmation);
              });
            }
          });"""
new = """          document.addEventListener('DOMContentLoaded', () => {
            const checkoutButton = document.getElementById('checkout-button');
            if (checkoutButton) {
              checkoutButton.addEventListener('click', () => {
                throw new Error('Checkout button intentionally broken for the demo');
              });
            }
          });"""
if old not in text:
    raise SystemExit('Target checkout event block not found in server.js')
path.write_text(text.replace(old, new))
PY

echo "Updated $FILE so the checkout button throws a JS error."
echo "Commit and push this change to trigger the deployed broken-demo state."
