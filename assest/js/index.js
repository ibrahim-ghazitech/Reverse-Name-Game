function correctName(){
    const reversedName = document.getElementById('reverse-name').value;
    const correctName = reversedName.split('').reverse().join('');
    document.getElementById('correct-name').innerText = `Correct Name: ${correctName}`;

}





