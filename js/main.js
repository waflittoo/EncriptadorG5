const resultNotFound = document.getElementById('resultNotFound');
const resultFound = document.getElementById('resultFound');
const mainTextarea = document.getElementById('mainTextarea');
const resultText = document.getElementById('resultText');

const encriptBtn = document.getElementById('encriptBtn');
const decriptBtn = document.getElementById('decriptBtn');
const copyBtn = document.getElementById('copyBtn');


let toEncript = '';

encriptBtn.addEventListener('click', () => {
    if (mainTextarea.value !== '') {
        console.log('en-click');
        let mainText = mainTextarea.value.toLowerCase()
        toEncript = mainText.split('');
        for (let i = 0; i < toEncript.length; i++) {
            switch (toEncript[i]) {
                case "a":
                    toEncript[i] = "ai"
                    break;
                case "e":
                    toEncript[i] = "enter"
                    break;
                case "i":
                    toEncript[i] = "imes"
                    break;
                case "o":
                    toEncript[i] = "ober"
                    break;
                case "u":
                    toEncript[i] = "ufat"
                    break;
                default:
                    continue;
            }
        }
        let n_text = toEncript.join("");
        resultText.innerText = n_text;
        resultNotFound.classList.add('hidden');
        resultFound.classList.remove('hidden');
    }
});

decriptBtn.addEventListener('click', () => {
    if (mainTextarea.value !== '') {
        console.log('de-click');
        let decriptedText = mainTextarea.value;

        console.log(decriptedText);

        decriptedText = decriptedText.replace(/ai/img, 'a');
        decriptedText = decriptedText.replace(/enter/img, 'e');
        decriptedText = decriptedText.replace(/imes/img, 'i');
        decriptedText = decriptedText.replace(/ober/img, 'o');
        decriptedText = decriptedText.replace(/ufat/img, 'u');
        console.log(decriptedText);
        resultText.innerText = decriptedText;
        resultNotFound.classList.add('hidden');
        resultFound.classList.remove('hidden');
    }
});

copyBtn.addEventListener('click', () => {
    let text = resultText.innerHTML
    navigator.clipboard.writeText(text)
});
