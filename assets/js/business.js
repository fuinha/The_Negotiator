$(document).ready(function(){
    $("#appSubmit").on("submit", function(event){
       event.preventDefault()
     var signUpInfo =  {
         business_name: name,
         address: address,
         owner: owner,
         agent: businessType,
         phone_number: phoneNumber,
         email: email,

     }
     var name = $("#name").val();
     var address =$("#address").val();
     var owner = $("#owner").val();
     var phoneNumber = $("#phoneNumber").val();
     var email = $("#email").val();
     var businessType = $("#businessType").val();

$.ajax ({
    url: "/api/dealer",
    type: "post",
    data: signUpInfo,
    dataType: 'json',
    success: () => {
    console.log(signUpInfo)
}
})     
    })
 })