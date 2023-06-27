function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "paulo@gmail.com" && senha == "admin123"){
        alert('Secesso ao logar');
        location.href = "index.html"
    }else{
        alert('Usuario ou senha incorretos');
    }
}