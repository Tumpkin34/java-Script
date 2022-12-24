// src="https://code.jquery.com/jquery-3.6.1.min.js";
let tempTr;
let tempText;

function confirm() {
    // 각 태그들 객체화인데 input은 입력된 값 가져옴
    let input = $("#input").val();

    let $trs = $("tbody tr");

    // 아동, 청소년, 성인 이외의 값이 입력되었는지 판단하기 위한 flag
    let check = false;

    // 처음실행했을 때는 false일 것이다.
    // 어떠한 행이 체크 되어있을 때 실행
    if (tempTr) {
        // 그 행의 바탕색과 문구를 저장된 변수로 수정한다.
        // tempTr.style.background = "#fff";
        tempTr.css('background',"#fff");

        // tempTr.firstElementChild.innerHTML = tempText;
        tempTr.children().eq(0).text(tempText)
    }

    $trs.each(function (i) {
        let $td = $trs.eq(i).children().eq(0);
        if ($td.text() == input) {
            tempTr = $trs.eq(i);
            tempText = $td.text();
            $trs.eq(i).css('background', '#ef5350');
            $td.text("★" + input);

            check = true;
        }
    })

    if (!check) {
        alert("다시 시도해주세요.");
    }
}