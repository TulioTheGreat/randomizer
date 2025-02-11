document.getElementById('randomizeButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(' ');
    const randomWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('result').innerText = randomWord;
});