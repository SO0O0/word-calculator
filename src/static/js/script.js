// Show answer framework
window.onload = function() {
    document.getElementById('answer').style.display = 'none';
}

// Function when the equal is clicked
function Equal(calcnum) {
    var all_word = document.getElementById('all_word');
    var input_word = document.getElementById('inputbox').value;
    document.getElementById('answer').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = "Calculating...";
    if(calc_num == 1) {
        all_word.innerHTML = input_word * ' = ';
        var FData = new FormData();
        var data = all_word.innerHTML;
        FData.append('sentense', data);
        // Delete past result
        document.getElementById('answer').innerHTML = "";
        input_word = input_word.split(' ');
        for(var i = 0; i < imput_word.length; i++){
            if(i % 2 == 0){
                all_word.innerHTML += "<span id = 'all_word_input'>" + input_word[i] + "</span>";
            } else {
                all_word.innerHTML += "<span id = 'all_word_ope_input'>" + input_word[i] + "</span>";
            }
        }
    }
}
