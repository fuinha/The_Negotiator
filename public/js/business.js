$(document).ready(function () {

    $("#appSubmit").on("click", function (event) {
        event.preventDefault()

        var name = $("#name").val().trim();
        var address = $("#address").val().trim();
        var owner = $("#owner").val().trim();
        var phoneNumber = $("#phoneNumber").val().trim();
        var email = $("#email").val().trim();
        var businessType = $("#businessType").val().trim();
        var password = $("#password").val().trim();
        var state = $("#state").val().trim();
        var zip = $("#zip").val().trim();

        var userTable = {
            email: email,
            password: password
        };

        if (!userTable.email || !userTable.password) {
            return;
        };

        var signUpInfo = {
            business_name: name,
            address: address,
            owner: owner,
            agent: businessType,
            phone_number: phoneNumber,
            email: email,
            state: state, 
            zip: zip
        };

        userData(userTable, signUpInfo);

        function userData(userTable, signUpInfo) {

            $.post("/api/signup", userTable).then(data => {

            $.get("/api/user_data", alldata => {
                var idVariable = alldata.id;
            $.post("/api/contact", signUpInfo).then(userdata => {
                window.location.replace("/member?id="+idVariable);
            });
        });
            });
        };
    });
});