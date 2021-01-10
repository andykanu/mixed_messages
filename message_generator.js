//retrieve quote of the day from 'They Said So' endpoint
const endpoint = "https://quotes.rest/qod?category=inspire";

async function retrieveQOD () {
    try { 
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json()

         let quote = json.contents.quotes[0].quote;
         let author = json.contents.quotes[0].author;
         console.log(quote);
         console.log(author);
         return quote, author;
      }
    catch (err) {
        console.log(err);
        alert('Failed to retrieve quote');
    }
}

const displayMessage = (quote, author) => {
     display_quote = document.getElementById('quote');
     display_quote.style.display = 'block';
     display_quote.textContent = quote;
     console.log(quote);
     console.log(author);
} 

