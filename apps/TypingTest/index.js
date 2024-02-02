let speed = 0;
let currentWord = "";
let dict = ["hello", "test", "word","apple", "banana", "orange", "grape", "kiwi"]

let inputElement = document.getElementById("currentWord");
let wordElement= document.getElementById("wordToType");


function getRandomWord() {
  let randomIndex = Math.floor(Math.random() * dict.length);
  return dict[randomIndex];
}

wordElement.innerText = getRandomWord();

inputElement.addEventListener("input", e => {
  let char = e.data;
  if(char == ' '){
    console.log("Checking Spelling");
    let currentWord = inputElement.value;
    currentWord = currentWord.replace(/\s+/g, '');
    if(currentWord == wordElement.innerText){
      inputElement.style.color = 'black';
      inputElement.value = '';
      wordElement.innerText = getRandomWord();
    }else{
      inputElement.style.color = 'red';
      let currentWord = inputElement.value;
      currentWord = currentWord.replace(/\s+/g, '');
      inputElement.value = currentWord;
    }
  }
});
