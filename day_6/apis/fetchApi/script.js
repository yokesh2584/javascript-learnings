const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

newQuoteBtn.addEventListener("click", async () => {
  newQuoteBtn.disabled = true;
  let loading = true;
  if (loading) {
    const quoteBox = document.querySelector(".quote-box");
    quoteBox.innerHTML = ` <div class="loader"></div> `;
    try {
      const response = await fetch("http://localhost:5000/quote");
      const data = await response.json();
      if (data) {
        loading = false;
        quoteBox.innerHTML = `<p id="quoteText">${data.q}</p>
        <span id="quoteAuthor">${data.a}</span>`;
      } else {
        quoteBox.innerHTML = `<div class="loadFail">Quote is missing! Try again.</div>`;
      }
    } catch (error) {
      quoteBox.innerHTML = `<div class="loadFail">Failed to load a quote!</div>`;
    }
  }
  newQuoteBtn.disabled = false;
});
