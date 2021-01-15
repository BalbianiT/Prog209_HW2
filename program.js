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