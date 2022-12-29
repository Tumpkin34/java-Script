# 자바스크립트(Javascript)
    1. 퍼즐 조각처럼 코드 형태로 HTML 페이지에 내장된다.
    2. 컴파일 과정 없이 브라우저 내부의 자바스크립트 처리기(인터프리터)에 의해 바로 실행된다.
    ※ 개발이 발전됨에 따라 컴파일 과정이 가능해졌으며, Node.js로 서버환경을 구축한다.
     
간단한 연산은 인터프리터만으로도 가능하다
db를 조회한다면 복잡한 연산이라고 한다.

# 웹 페이지에서 자바스크립트의 역할
    웹 페이지는 3가지(HTML, CSS, JS) 코드가 결합되어 작성된다.
    자바스크립트는 사용자의 입력을 처리하거나 웹 애플리케이션을 작성하는 등
    웹 페이지의 동적 제어에 사용된다.

- 사용자의 입력 및 연산<br>
HTML 폼은 입력 창만 제공하고,<br>
키, 마우스의 입력과 연산은 오직 자바스크립트로만 처리가 가능하다.<br>

- 웹 페이지 내용 및 모양의 동적 제어<br>
HTML 태그의 속성이나 콘텐츠, CSS 속성 값을 변경하여<br><br>
웹 페이지에 동적인 변화를 일으키는 데에 활용된다.<br>

- 브라우저 제어<br>
브라우저 윈도우의 크기나 모양 변경, 세 윈도우나 탭 열기, 다른 웹 사이트 접속,<br>
브라우저의 히스토리 제어 등 브라우저의 작동을 제어하는 데 활용된다.<br>

- 웹 서버와의 통신(Ajax)<br>
웹 페이지가 웹 서버와 데이터를 주고 받을 때 활용된다.<br>

- 웹 애플리케이션 작성(API)<br>
자바스크립트 언어로 활용할 수 있는 많은 API를 제공하므로,<br>
웹 브라우저에서 실행되는 다양한 웹 애플리케이션을 개발할 수 있다.<br>

# 자바스크립트를 작성할 수 있는 위치<br>
1. HTML 태그의 이벤트 리스너 속성에 작성<br>
  HTML 태그에는 마우스가 클릭되거나 키보드의 키가 입력되는 등의 이벤트가 발생할 때<br>
  처리하는 코드를 등록하는 리스너 속성이 있다.<br>

2. <script></script> 내에 작성<br>
  \<head></head> , \<body></body> , body 밖 등 어디든 들어갈 수 있다.<br>
  웹 페이지 내에서 여러 번 작성할 수 있다.<br>

3. 자바스크립트 파일에 작성<br>
  자바스크립트 코드를 확장자가 .js인 별도의 파일로 저장하고,<br>
  <script src = ".js경로"></script><br>

4. URL 부분에 작성 *URL : 경로<br>
  <a>태그의 href 속성 등에도 자바스크립트 코드를 작성할 수 있다.<br>
  하지만 href 속성에서 자바스크립트 코드를 쓸 때에는 javascript라는 키워드를 작성해야한다.<br>
  
# 자바스크립트 다이얼로그
    사용자에게 메세지를 출력하거나, 입력을 받을 수 있는 3가지 다이얼로그가 있다.

- 프롬프트 다이얼로그<br>
prompt("메세지", "디폴트 값");

사용자가 입력한 문자열 값을 리턴하지만 아무 값도 입력하지 않으면 ""을 리턴,<br>
취소나 강제로 닫으면 null을 리턴한다.<br>
"디폴트 값"은 생략이 가능하다.<br>

- 확인 다이얼로그<br>
confirm("메세지");<br>

확인/취소 버튼을 가진 다이얼로그를 출력한다.<br>
확인 true, 취소 혹은 강제로 닫을 시 false를 리턴한다.<br>

-경고 다이얼로그<br>
alert("메세지");<br>

모달창 : 메인화면이 흐려지고 창이 하나 뜨는것<br>

# 데이터 타입과 변수
# 1. 자바스크립트 식별자(이름)<br>
    식별자(identifier)란 자바스크립트 개발자가 변수, 상수, 함수에 붙이는 이름이다.
    식별자를 만들 때 다음 규칙을 준수해야 한다.

  - 첫 번째 문자 : 알파벳, 언더바, $문자만 사용 가능<br>
  - 두 번째이상 문자 : 알파벳, 언더바, 0-9, $사용 가능<br>
  - 대소문자 구분 : data와 dAta는 다른 식별자이다.<br>
  - 키워드(예약어) 사용불가<br>

  6variable x<br>
  student_id o<br>
  _code o<br>
  if x<br>
  %calc x<br>
  $data o<br>

# 2. 문자 구분<br>
    세미콜론으로 문장과 문장을 구분한다.<br>
    한 줄에 한 문장만 있는 경우 세미콜론을 생략할 수 있다.<br>

  i = i + 1 o<br>
  j = j + 1 o<br>
  k = k + 1; m = m + 1; o<br>
  n = n + 1 p = p + 1 x<br>

# 3. 주석<br>
  - 한 줄 주석 : //<br>
  - 범위 주석	: /* */<br>

# 4. 데이터 타입 (typeof())  (자바스크립트 동적 바인딩)<br>
  - 숫자 타입(number) : 42, 3.14, ...<br>
  - 논리 타입(bool) : true, false<br>
  - 문자열 타입(string) : "안녕", "하세요", "35", 'a', "A",...<br>
  - 객체 레퍼런스 타입(object) : Object, Array, Math, Date, ...<br>
  - undefined : 타입이 정해지지 않은 것을 의미한다.<br>
  - null : 값이 정해지지 않은 것을 의미한다.<br>

  질문 : 1이 입력되었을 때 자료형을 어떻게 되나?<br>
    답 : 알아서 정수로 바꾼다.(범위는 무시한다.)<br>

# 5. 변수 (함수 안이면 지역, 밖이면 전역)<br><br>
  - var 키워드로 변수를 선언한다.<br><br>

  var score; <br><br>
  var year, month, day;  undefined<br><br>
  var address = "남양주";<br><br>

  - var 키워드 없이 변수를 선언할 수 있다.<br>

  age = 20;<br>

  만약 위에 age가 이미 선언되어 있다면 값 수정.<br>
  var를 반드시 붙여서 선언하는 것이 명료하고, 실수를 막을 수 있기 때문에<br>
  var 키워드 없이 선언하지 말자!<br>

  ※ 대혼란<br>

  var age = 20;<br>
  var age = 10;<br>

  var 키워드를 사용하더라도 같은 이름으로 선언이 가능하고 두 번째 부터는 값만 수정된다.<br>

  자바스크립트는 버전이라 하지않고 연식(이크마)ES5(2015년)를 쓴다 <br>
  ES6(비쥬얼 코드는 디폴트)부터 리엑트가 적용된다.<br>


  터미널 : 컨트롤 + `<br>
    cd 현재파일(경로 지정)<br>
    node variable.js<br>


# 6. 지역변수와 전역변수<br>
    변수의 사용 범위(scope)에 따라서 전역변수(global)와 지역변수(local)로 나뉜다.
    var로 선언 시, scope는 반드시 함수의 영역만 판단한다.

  전역변수 : 함수 밖에서 선언되거나 함수 안에서 var키워드 없이 선언.<br>
  지역변수 : 함수 안에서 var키워드로 선언, 선언된 함수 내에서만 사용 가능.<br>
  
# 7. 상수<br>
  let : 수정 가능<br>
  const : 수정 불가능<br>
  
# 함수
  인자(파라미터, parameter) : 매개변수(선언부)
  인수(아규먼트, argument) : 매개변수에 들어가는 값(사용부, 호출부)

# 함수의 선언
  function 식별자(args1, arg2, ...){
    코드 작성
    return 리턴값;
  }

- function : 함수 선언 표시<br>
- 식별자 : 동사로 작성<br>
- parameter : 여러 개 있을 때에는 콤마로 분리하고 자료형을 따로 작성하지 않는다. 생략도 가능하다.<br>
- return : 생략이 가능하다. 리턴타입은 따로 작성하지 않는다.<br>

# 자바스크립트 전역함수
- eval()<br>
  문자열 형태로 수식을 전달받아서 수식을 계산한다.<br>
  eval("2*3+4*6") == 30;<br>

- parseInt()<br>
  문자열을 정수타입으로 변환한다.<br>
  parseInt("32") === 32;<br>

- isNaN() *타입이 안맞을 때<br>
  값이 NaN이면 true<br>
  NaN이 아니면 false<br>

- isFinite()<br>
  값이 NaN이면 false<br>
  NaN이 아니면 true<br>
