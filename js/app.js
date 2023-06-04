function Change() {
    let inp_value = document.getElementById('inp').value;
    let result = document.getElementById('result');
    inp_value = inp_value.slice(-3, -2);

    if (inp_value === "1") {
        result.innerHTML = "Səhər qrupu";
        result.style.color = "yellow";
    }
    else if (inp_value === "2") {
        result.innerHTML = "Günorta qrupu";
        result.style.color = "red";
    } 
    else if (inp_value === "3") {
        result.innerHTML = "Axşam qrupu";
        result.style.color = "black";
    }
}



function Make() {
    let x = document.getElementById('mode')

    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'black';
    }
    else {
        document.body.style.backgroundColor = 'white';
    }
}

  
  
