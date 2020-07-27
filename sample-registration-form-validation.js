function formValidation()
{
    var firstname = document.registration.firstname;
    var secname = document.registration.secname;
    var passid = document.registration.passid;
    var repassid = document.registration.repassid;
    var uemail = document.registration.email;
    if(userid_validation(firstname) && allLetter(firstname)){
        if(userid_validation(secname) && allLetter(secname)){
            if(passid_validation(passid,7,12)){
                if(repassid_validation(passid,repassid)){
                    if(ValidateEmail(uemail)){
                    }
                }   
            } 
        }
    }
    return false;
}

function userid_validation(uid)
{
    var uid_len = uid.value.length;
    if (uid_len == 0)
    {
        alert("Поле не должно быть пустым ");
        uid.focus();
        return false;
    }
    return true;
}


function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len>= my || passid_len<mx)
    {
        alert("Пароль не должен быть пустым / длина должна быть между "+mx+" и "+my);
        passid.focus();
        return false;
    }
    return true;
}


function repassid_validation(passid,repassid)
{
    if (passid.value !== repassid.value)
    {
        alert("Пароли не совпадают!");
        repassid.focus();
        return false;
    }
    return true;
}

function allLetter(uname)
{ 
    var letters = /^[А-Яа-я]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
    alert('Поле должно содержать только буквы русского алфавита');
    uname.focus();
    return false;
    }
}


function ValidateEmail(uemail)
{
    var mailformat = /.+@.+\..+/i;
    if(uemail.value.match(mailformat))
    {
        alert('Форма принята');
        window.location.reload()
        return true;
    }
    else
    {
        alert("Введите корректную электронную почту");
        uemail.focus();
        return false;
    }
}