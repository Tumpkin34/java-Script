function getInputValue() {
    // Selecting the input element and get its value 
    const inputVal = document.getElementById("myInput").value;
    console.log(inputVal)
    const temps = document.getElementsByTagName("td");
    // console.log(inputVal)
    for (let i = 2; i < temps.length; i++) {
        temps[i].innerHTML = temps[i].innerHTML.replace("★", "");
        // console.log(temps[i].parentElement.style);
        temps[i].parentElement.style = "background: white";
    }
    for (let i = 0; i < temps.length; i+=2) {
        // console.log(temps[i].innerHTML)
        // if(temp.includes(inputVal)){
        //     temps[i].innerHTML=inputVal;
        //     temps[i].parentElement.style = "background: white";
        // }
        if (inputVal == temps[i].innerHTML) {
            // console.log(document.getElementsByTagName("tr").length);
            temps[i].innerHTML = "★" + inputVal;
            // console.log(temps[i].parentElement.getAttribute("style"))
            // temps[i].parentElement.background = 'blue';
            temps[i].parentElement.style = "background: red";
            return;
        }
    }
    alert("다시 시도해주세요");
}