var addgreen = document.getElementById("active");
addgreen.style.backgroundColor = "green";
function toggleForm() {
    cancle = document.querySelector('.cancle');
    body = document.querySelector('body');
    mobile = document.querySelector('.fa-times');
    section = document.querySelector('section');
    section.classList.toggle('active');
    mobile.classList.toggle('active');
    body.classList.toggle('active');
    cancle.classList.toggle('active');
}
function formSignin(){
    let username = "admin";
    let password = "123456";
    let appendUsername = document.getElementById("username").value;
    let appendPassword = document.getElementById("password").value;
    if(appendUsername === username && appendPassword === password){
        alert("Bạn đã đăng nhập thành công!");
    }
    else{
        alert("Đăng nhập thất bại");
    }
    if(appendUsername != username){
        alert("Không có tài khoản này");
    }
    else if(appendPassword != password){
        alert("Sai mật khẩu");
    }
}