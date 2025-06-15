const generateBtn = document.getElementById('generate');
const resultDiv = document.getElementById('result');

generateBtn.addEventListener('click', () => {
  const length = +document.getElementById('length').value;
  const hasUpper = document.getElementById('uppercase').checked;
  const hasLower = document.getElementById('lowercase').checked;
  const hasNumber = document.getElementById('numbers').checked;
  const hasSymbol = document.getElementById('symbols').checked;

  const password = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
  resultDiv.innerHTML = password ? `${password} <button onclick="copyToClipboard('${password}')">📋</button>` : 'Please select at least one option!';
});

function generatePassword(length, upper, lower, number, symbol) {
  const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
  const numberSet = '0123456789';
  const symbolSet = '!@#$%^&*()_+[]{}<>?';

  let allChars = '';
  if (upper) allChars += upperSet;
  if (lower) allChars += lowerSet;
  if (number) allChars += numberSet;
  if (symbol) allChars += symbolSet;

  if (!allChars) return '';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randIndex];
  }
  return password;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert('Password copied to clipboard!');
}
