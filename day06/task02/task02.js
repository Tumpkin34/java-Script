$("#change").on('click', getResult);

// .으로 시작하면 다 막아버리기

function changeToHangle(number){
    const $div = $("#round");
    const $p = $("#result");
    let hangle = "공일이삼사오육칠팔구";
    let data = "";
    let result = "";
    let check = false;
    let zeroCheck = parseInt(number) == 0;

    if(isNaN(number) || number.startsWith("-.")){
        $p.text("숫자만 입력해주세요.");
        $div.text("4");
        return;
    }

    if(number < 1){
        result = "영";
        check = true;
    }

    if (number < 0){
        result = "마이너스 ";
        check = false;
        if (zeroCheck){
            result += "영";
            check = true;
        }
    }

    $div.text("3");
    
    for(let i in number){
        data = hangle[number.charAt(i)];
        console.log(data);
        if(check && data == '공'){
            check = false;
            continue;
        }

        if(number.charAt(i) == '-'){
            continue;
        }

        if(!data && number.charAt(i) != '-'){
            result += "점";
            $div.text("2");
            continue;
        }
        result += data;
    }
    $p.text(result);
}

function getResult(){
    var input = $("input[name='input']").val()
    input = input.startsWith('.') ? '0' + input : input;
    changeToHangle(input);
}

