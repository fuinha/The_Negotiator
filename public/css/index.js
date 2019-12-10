function Validation() {
    var user = $('#username').val();
    var password = $('#passwoed').val();
    if (user == "") {
        $('.userError').html("Enter username" + "");
    }
}