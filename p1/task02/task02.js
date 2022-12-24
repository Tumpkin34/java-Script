const outputResult = document.getElementsByClassName("result");
const round = document.getElementById("round");
const hangle = "공일이삼사오육칠팔구";

function change() {
    const getText = document.getElementById("inputText").value;
    let result = "";
    let check = true;

    if (isNaN(getText)) {
        outputResult[0].innerHTML = "숫자만 입력해주세요";
        round.innerHTML = "4";
        return;
    }

    for (let i in getText) {
        if (check && (getText.startsWith(".")||getText.startsWith("0"))) {
            result = getText.startsWith(".")? "영점" : "영";
            check = false;
            round.innerHTML = "2";
            continue;
        }

        result += hangle[getText.charAt(i)];
        round.innerHTML = "3";
    }
    if(result.includes("undefined")){
        round.innerHTML = "2";
    }
    result = result.replace("undefined","점");
    outputResult[0].innerHTML = result.replace("undefined","점");
}