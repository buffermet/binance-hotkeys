/**
 * Keyboard shortcuts for binance.
 */

globalThis.addEventListener("keypress", event => {
  if (event.ctrlKey && event.shiftKey) {
    let sliders;
    switch (event.code) {
      case "KeyB":
        /**
         * CTRL+SHIFT+B
         * Create buy order.
         */
        document.querySelector("button.css-18hdaey").click();
        break;
      case "KeyC":
        /**
         * CTRL+SHIFT+C
         * Cancel all open orders.
         */
        document.querySelectorAll("div.css-1oh3ukp").forEach(button => button.click());
        break;
      case "KeyH":
        /**
         * CTRL+SHIFT+H
         * Select highest buy price in order book.
         */
        document.querySelector("div.css-1f9551p button").click();
        const buyOrders = document.querySelectorAll("div.orderbook-list")[1]
          .querySelectorAll("div.orderbook-progress");
        buyOrders[0].children[0].click();
        break;
      case "KeyL":
        /**
         * CTRL+SHIFT+L
         * Select lowest sell price in order book.
         */
        document.querySelector("div.css-1f9551p button").click();
        const sellOrders = document.querySelectorAll("div.orderbook-list")[0]
          .querySelectorAll("div.orderbook-progress");
        sellOrders[sellOrders.length - 1].children[0].click();
        break;
      case "KeyS":
        /**
         * CTRL+SHIFT+S
         * Create sell order.
         */
        document.querySelector("button.css-1epoit0").click();
        break;
      case "Digit6":
        /**
         * CTRL+SHIFT+0
         * Select 0% of total possible buy and sell amount.
         */
        sliders = document.querySelectorAll(".bn-tradeSlider-ratioButton");
        if (sliders) {
          const sliderOne = sliders[0].parentElement;
          const sliderTwo = sliders[1].parentElement;
          if (sliderOne) {
            sliderOne.children[3].click();
          }
          if (sliderTwo) {
            sliderTwo.children[3].click();
          }
        }
        break;
      case "Digit7":
        /**
         * CTRL+SHIFT+1
         * Select 25% of total possible buy and sell amount.
         */
        sliders = document.querySelectorAll(".bn-tradeSlider-ratioButton");
        if (sliders) {
          const sliderOne = sliders[0].parentElement;
          const sliderTwo = sliders[1].parentElement;
          if (sliderOne) {
            sliderOne.children[4].click();
          }
          if (sliderTwo) {
            sliderTwo.children[4].click();
          }
        }
        break;
      case "Digit8":
        /**
         * CTRL+SHIFT+8
         * Select 50% of total possible buy and sell amount.
         */
        sliders = document.querySelectorAll(".bn-tradeSlider-ratioButton");
        if (sliders) {
          const sliderOne = sliders[0].parentElement;
          const sliderTwo = sliders[1].parentElement;
          if (sliderOne) {
            sliderOne.children[5].click();
          }
          if (sliderTwo) {
            sliderTwo.children[5].click();
          }
        }
        break;
      case "Digit9":
        /**
         * CTRL+SHIFT+9
         * Select 75% of total possible buy and sell amount.
         */
        sliders = document.querySelectorAll(".bn-tradeSlider-ratioButton");
        if (sliders) {
          const sliderOne = sliders[0].parentElement;
          const sliderTwo = sliders[1].parentElement;
          if (sliderOne) {
            sliderOne.children[6].click();
          }
          if (sliderTwo) {
            sliderTwo.children[6].click();
          }
        }
        break;
      case "Digit0":
        /**
         * CTRL+SHIFT+4
         * Select 100% of total possible buy and sell amount.
         */
        sliders = document.querySelectorAll(".bn-tradeSlider-ratioButton");
        if (sliders) {
          const sliderOne = sliders[0].parentElement;
          const sliderTwo = sliders[1].parentElement;
          if (sliderOne) {
            sliderOne.children[7].click();
          }
          if (sliderTwo) {
            sliderTwo.children[7].click();
          }
        }
        break;
    }
  }
});

