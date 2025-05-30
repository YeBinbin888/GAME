window.onload = function () {
    var email = document.getElementById("email");
    var btn = document.getElementById("submit");
    var info = document.getElementById("submit-info");
    email.onfocus = function () {
        // 当聚焦到该输入框时，把输入框的内容置为空
        if (email.value == "输入你的邮箱地址") {
            email.value = "";
        }
    };
    email.onblur = function () {
        // 当失去焦点时，显示输入框的默认内容
        if (email.value == "") {
            email.value = "输入你的邮箱地址";
        }
    };
    btn.onclick = function () {
        if (email.value == "" || email.value == null || email.value == "输入你的邮箱地址") {
            info.innerText = "发送失败";
            return false;
        } else {
            info.innerText = "发送成功";
        }
    } 
};