let speed = 0;
let inputElement = document.getElementById("currentWord");
let wordElement = document.getElementById("wordToType");
let words = [];
let idx = [];



async function getQuote(){
  let response = await fetch("https://api.quotable.io/quotes/random");
  let quote = await response.json();
  return quote[0].content 
}


inputElement.addEventListener("input", e => {
  let char = e.data;
  if(char == ' '){
    let currentWord = inputElement.value;
    currentWord = currentWord.replace(/\s+/g, '');
    if(currentWord == words[0]){
      inputElement.style.color = 'black';
      inputElement.value = '';
      let span = document.getElementById(`${idx[0]}`);
      span.style.color = 'green';
      if(words.length > 0){
        words.shift();
        idx.shift();
      }
    }else{
      inputElement.style.color = 'red';
      let currentWord = inputElement.value;
      currentWord = currentWord.replace(/\s+/g, '');
      inputElement.value = currentWord;
    }
  }

  if(words.length == 0){
    console.log("finished: ", words);
    init();
  }
});

function initInnerText(quote) {
  let innerText = "";
  let formattedWords = quote.split(/(\s+)/);

  formattedWords.forEach((word, i) => {
    if (word.trim() !== '') {
      words.push(word);
      formattedWords[i] = `<span id='${words.length - 1}'>${word}</span>`;
      idx.push(words.length - 1);
    }
  });

  innerText = formattedWords.join('');
  return innerText;
}

async function init(){
  let randomQuote = await getQuote();
  wordElement.innerHTML = initInnerText(randomQuote);
  console.log(words)
  console.log(idx)
}



init();