/**
 * Automatically change kline intervals of multiple Binance charts by holding ALT key.
 */

if (location.pathname.endsWith("multipleChart")) {
  globalThis.addEventListener("load", () => {
    let altPressed = false;

    globalThis.addEventListener("keydown", event => {
      if (event.altKey) altPressed = true;
    });

    globalThis.addEventListener("keyup", event => {
      if (!event.altKey) altPressed = false;
    });

    const intervalButtons = document.querySelectorAll(
      "div.css-e2pgpg div.css-137m6a4," +
      "div.css-e2pgpg div.css-137m6a4," + 
      "div.css-e2pgpg div.css-14effk1");

    intervalButtons.forEach(button => {
      button.addEventListener("mouseup", event => {
        if (altPressed) {
          intervalButtons.forEach(_button => {
            if (_button.id === event.target.id) {
              _button.click();
            }
          });
        }
      });
    });
  });
}
