var container=document.createElement("div")
container.className="container"

var quote=document.createElement("div")
quote.className="quote"
quote.id="quote"

var author=document.createElement("div")
author.className="author"
author.id="author"

var button=document.createElement("button")
button.addEventListener("click",fetchQuote)
button.innerHTML="Get New Quote"

container.append(quote,author,button)
document.body.append(container)

async function fetchQuote() {
    try {
      const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
      const data = await response.json();
  
      // Extract quote and author
      const quote = data[0].quote;
      const author = data[0].author;
  
      // Display the quote and author
      document.getElementById('quote').textContent = `"${quote}"`;
      document.getElementById('author').textContent = `- ${author}`;
    } catch (error) {
      console.error('Error fetching quote:', error);
      alert('An error occurred while fetching the quote. Please try again later.');
    }
  }