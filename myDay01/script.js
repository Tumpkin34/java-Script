// script_file.html
// url.html

function change(obj) {
    // console.log(obj.classList);
    // obj.src="images/oneFamily.png";
    // console.log(obj.classList[1])
    // obj.classList.replace("on", "off");
    // if(obj.classList[1]=="on"){
    //     obj.classList.replace("on", "off");
    //     obj.src="images/oneFamily.png";
    // }else{
    //     obj.classList.replace("off", "on");
    //     obj.src="images/oneFamily.png";
    // }
    // 10 > 1 ? console.log("10") : console.log("1");

    var status = obj.classList[1];
    var src = status == "on" ? "images/oneFamily.png" : "images/twoFamily.png";
    setAttributes(obj, src, status);
}

function setAttributes(obj, src, status) {
    console.log(obj)
    console.log(obj.nextElementSibling)
    // obj.classList.replace("on", "off");
    obj.src = src;
    status == "on" ? obj.classList.replace("on", "off") : obj.classList.replace("off", "on")
}

function setAttributes2(src) {
    // obj.classList.replace("on", "off");
    obj.src = src;
    src == "on" ? obj.classList.replace("on", "off") : obj.classList.replace("off", "on")
}