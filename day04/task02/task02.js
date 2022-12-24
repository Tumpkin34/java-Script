// id가 change인 태그를 클릭하면(.onclick) getResult를 실행한다.
// onclick도 onclick이라는 메소드의 주소값을 가져온다
// getResult메소드를 getResult라고만 쓴다면 메소드의 주소값이 된다.
// ()가 붙으면 retrun을 받아온다.
// getResult는 받아올게 없기 때문에 ()를 안쓴다.
document.getElementById("change").onclick = getResult;

function getResult(temp){
    console.log(temp)
    // input태그에 입력된 값을 저장
    const input = document.querySelector("input[name='input']").value;
    // 저장된 값을 changeToHangle메소드에 input(인수)을 넘겨준다.
    changeToHangle(input);
}

function changeToHangle(number){
    // 태그를 객체로 만듬
    const div = document.getElementById("round");
    const p = document.getElementById("result");

    // 
    let hangle = "공일이삼사오육칠팔구";
    let data = "";
    let result = "";
    let check = false;

    // NaN(Not-a-Number) : 숫자가 아닐때 
    if(isNaN(number)){
        //각 태그들의 값을 바꿈
        p.innerHTML = "숫자만 입력해주세요.";
        div.innerHTML = "4";

        // 메소드 종료
        return;
    }

    // 입력한 숫자가 1보다 작다면 (*.25이런 숫자로 0.25로 취급한다)
    if(number < 1){
        // result앞에 영을 넣고
        result = "영";
        // 사용자가 0.25를 입력했을 때 영공점이오가 되지 않기 위한
        // flag
        check = true;
    }

    // 위에 걸러진 경우가 아니면 3밖에 남지 않았다.
    div.innerHTML = "3";
    
    // number를 문자열로 보고 길이 만큼 인덱스를 가져다 주나보다
    for(let i in number){
        // 0번째 방의 문자를 가져와서(사실 정수) hangle문자열에 가져온 문자 번째의 문자를 저장 
        data = hangle[number.charAt(i)];

        // 위에서 1보다 작을 때 영으로 바꿨고 check= true 
        // 처음 반복 때 처음 가져온 data가 공일 때
        if(check && data == '공'){
            // 이후에 나오는 공은 건너뛰면 안되기 때문에 false
            // 이 코드에 한 번이라도 접근했다면 이 if문은 
            // 이번 for문에서 다시는 실행 되지 않는다.
            check = false;
            // 다음 반복
            continue;
        }
        
        // data = hangle[number.charAt(i)];에서 숫자가 아닌 것을 가지고 왔다면 data에는 NaN이 담긴다.
        if(!data){
            // 처음 반복이후에 공을 막아줄 필요가 없으니까 check = false
            // check = false;
            // result뒤에 "점"연결
            result += "점";
            div.innerHTML = "2";
            // 다음 반복
            continue;
        }

        // data를 뒤에연결
        result += data;
    }
    // p태그에 위에서 완성한 result를 넣어줌
    p.innerHTML = result;
}
