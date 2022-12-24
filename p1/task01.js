let temp_tr;
let temp_text;

function input() {
    const trs = document.querySelectorAll("tbody>tr");
    const inputText = document.getElementById("inputText").value;
    let check = false;

    if (temp_tr) {
        console.log("안녕");
        temp_tr.style.background = 'white';
        temp_text.innerHTML = temp_text.innerHTML.replace("★", "");
    }
    trs.forEach(v => {

        if (v.firstElementChild.innerHTML == inputText) {
            console.log("안녕2");
            temp_tr = v;
            temp_text = v.firstElementChild;
            v.style.background = 'red';
            v.firstElementChild.innerHTML = "★" + inputText;
            check = true;
        }
    })

    if (!check) {
        alert("다시 시도해주세요")
    }
    document.getElementById("inputText").value = "";
}

