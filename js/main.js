function checkLogin() {
    var acc = document.getElementById("account").value;
    var pass = document.getElementById("password").value;
    if ((acc == "admin@gmail.com") && (pass == "Admin123"))
        alert('Logged in successfully!');
    else if ((acc != "admin@gmail.com") && (pass != "Admin123"))
        alert('Login failed!');
    else if (acc != "admin@gmail.com")
        alert('This account does not exist!');
    else
        alert('Wrong password!');
}

function checkMaGiamGia() {
    var maGG = document.getElementById("maGiamGia").value;
    if (maGG == "MGG01" || maGG == "MGG02" || maGG == "MGG03" || maGG == "MGG04" || maGG == "MGG05") 
        alert("Thêm mã giảm giá thành công"); 
    else 
        alert("Mã giảm giá không đúng, vui lòng nhập lại!!!");
}