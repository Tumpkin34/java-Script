$("#change").on('click', getResult);

// .으로 시작하는 거 다 막기

const $div = $("#round");
const $p = $("#result");
let result = "";
function getResult() {
    input = $("input[name='input']").val()
    if (input.startsWith('.') || isNaN(input) || input.startsWith('-.')) {
        not_a_number();
        return;
    }
    changeToHangle(input);
    result = ""
}

// 숫자가 아닐때
function not_a_number() {
    $p.text("숫자만 입력해주세요.");
    $div.text("4");
}

function changeToHangle(number) {
    let hangle = "공일이삼사오육칠팔구";
    let check = false;
    $div.text("3");
    console.log(number.length)
    for(let i in number){
        let data = number.charAt(number.length-1-i);
        console.log(i);
        console.log(data);
        if(check&&parseInt(number)==0&&data ==0){
            result = "영" + result;
            continue;
        }
        if(data == "."){
            result = "점" + result;
            check = true;
            continue;
        }
        if(data == "-"){
            result = "마이너스" + result;
            continue;
        }
        result = hangle[data] + result;
    }

    console.log(result)
    $p.text(result);
}