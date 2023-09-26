function showEmail(){
    const email = document.getElementById('emailField').value;
    const result = document.getElementById('result');
    result.innerHTML = `O email digitado é: <span style='color: red; font-weight: bold;'>${email}</span>`
    console.log("Email digitado: " + email);
}