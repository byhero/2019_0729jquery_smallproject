function validateform(_form) {
    var flag = true;

    if (_form.e_mail.value == "") {
        flag = false;
        $("#e_mail").css("border", "solid 3px red");
    }
    if (_form.nickname.value == "") {
        flag = false;
        $("#nickname").css("border", "solid 3px red");
    }
    if (_form.pwd.value == "") {
        flag = false;
        $("#pwd").css("border", "solid 3px red");
    }
    if (_form.name.value == "") {
        flag = false;
        $("#name").css("border", "solid 3px red");
    }
    if (_form.p_number.value == "") {
        flag = false;
        $("#p_number").css("border", "solid 3px red");
    }
    if (_form.birth.value == "") {
        flag = false;
        $("#birth").css("border", "solid 3px red");
    }
    if (_form.address.value == "") {
        flag = false;
        $("#address").css("border", "solid 3px red");
    }
    if (_form.address_detailed.value == "") {
        flag = false;
        $("#address_detailed").css("border", "solid 3px red");
    }
    return flag;
}
