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
        console.log(signUpInfo)
        console.log(userTable)
        userData(userTable, signUpInfo);

        function userData(userTable, signUpInfo) {
            alert("You are inside the funx")
            $.post("/api/signup", userTable).then(data => {
                console.log(data)
            alert("You are inside post 1")
            $.get("/api/user_data", alldata => {
                console.log(alldata)
                alert(alldata.id)
                var idVariable = alldata.id;
            $.post("/api/contact", signUpInfo).then(userdata => {
                console.log(userdata)
                alert("You are now in post 2")
                window.location.replace("/member?id="+idVariable);
            });
        });
            });
        };
    });
});