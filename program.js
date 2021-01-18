
let words = [];

SwapLetters.style.display = "none";

document.getElementById("start").addEventListener("click", function GetWords()
{
  for (let i = 0; i < 3; i++)
  {
    words.push(prompt("Please enter a word"));

    let ul = document.createElement('ul');
    document.getElementById("display").appendChild(ul);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = words[i];  
  };
  EnterWord.style.display = "none";
  SwapLetters.style.display = "block";
});

document.getElementById("swap").addEventListener("click", function Swap()
{
  var swapped = words.map(function(oneWord) {        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });

  First.style.display = "none"

  for (let i = 0; i < swapped.length; i++)
  {
    let ul = document.createElement('ul');
    document.getElementById("newDisplay").appendChild(ul);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = swapped[i]; 
  }
  SwapLetters.style.display = "none";
});