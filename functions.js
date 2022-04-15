function validation()
{
    var form = document.getElementById("form");
    var form = document.getElementById("email").value;
    var form = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z](2,3)$/;

    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Email adress is valid!";
        text.style.color = "#00ff00";
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please enter valid email adress!";
        text.style.color = "#00ff00";
    }

    if(email == "")
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Undefined";
        text.style.color = "#ffffff";
    }


}