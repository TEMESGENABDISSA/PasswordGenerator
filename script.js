const PasswordBox = document.getElementById("password");
const length = 12;
const upparCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+-={}[]|\:;'<>,.?/";
function createPassword(){
    let password = "";
    password += upparCase[Math.floor(Math.random () * upparCase.length)];
    password += lowerCase[Math.floor(Math.random () * lowerCase.length)];
    password += number[Math.floor(Math.random    () * number.length)];
    password += symbol[Math.floor(Math.random    () * symbol.length)];

}