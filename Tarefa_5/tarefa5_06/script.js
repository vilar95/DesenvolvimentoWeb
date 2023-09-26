function showEmail(){
    const email = document.getElementById('emailField').value;
    const result = document.getElementById('result');
    result.innerHTML = `O email digitado é: <span style='color: red; font-weight: bold;'>${email}</span>`
    console.log("Email digitado: " + email);
}

function cleam(){
    document.getElementById('result').innerHTML = '';
    document.getElementById('emailField').value = '';
    console.log("Formulario limpo");
}