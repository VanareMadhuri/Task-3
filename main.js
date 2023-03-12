const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author")
const quoteBtn = document.querySelector(".btn");

function randomQuote()
{
    
   fetch("https://api.quotable.io/random")
   .then(res => res.json())
   .then(result => {
//    console.log(result);  
   quoteText.innerHTML = result.content;  
   authorName.innerHTML = result.author;
});
}
