function showNumbers() {
    let i = 10;
    let output = '';
    while (i >= 1) {
        output += i + '<br>';
        i--;
    }
    document.getElementById('numberList').innerHTML = "<br>"+ output;
}

function resetNumbers() {
    document.getElementById('numberList').innerHTML = '';
}
