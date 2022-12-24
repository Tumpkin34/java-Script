let tempTr;
let tempText;

function confirm(){
    // 각 태그들 객체화인데 input은 입력된 값 가져옴
    const input = document.getElementById("input").value;
    const trs = document.querySelectorAll("tbody tr");

    // 아동, 청소년, 성인 이외의 값이 입력되었는지 판단하기 위한 flag
    let check = false;

    // 처음실행했을 때는 false일 것이다.
    // 어떠한 행이 체크 되어있을 때 실행
    if(tempTr){
        // 그 행의 바탕색과 문구를 저장된 변수로 수정한다.
        tempTr.style.background = "#fff";
        tempTr.firstElementChild.innerHTML = tempText;
    }

    trs.forEach(tr => {
        // 3개의 tr객체들 중 첫 번째 자식요소를 저장
        let td = tr.firstElementChild;
        // 첫 번째 자식요소이 Text와 사용자가 입력한 값이 일치하면 실행
        if(td.innerHTML == input) {
            // tempTr,tempText에 바꿀 객체와 객체의 text를 저장 
            // (추후에 다른 값이 입력 되었을 때 기존에 색칠 되어있는 행을 다시 돌려주기 위함)
            tempTr = tr;
            tempText = td.innerHTML;

            // 해당 객체 바탕색과 text에 별을 붙여 바꿈
            tr.style.background = "#ef5350";
            td.innerHTML = "★" + input;

            // 태그를 바꿔줬다면 true로 바꿔준다.
            check = true;
        }
    });

    // 위의 if문에 못들어 갔다는 말은 입력한 값이
    // 아동, 청소년, 성인 중에 없다는 것이니까 실행
    if(!check){
        alert("다시 시도해주세요.");
    }

}