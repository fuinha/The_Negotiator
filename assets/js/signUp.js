$(document).ready(function(){
    $("#signUpSubmit").on("submit", function(event){
       event.preventDefault()
       // If password not entered 
       if (password1 == '') 
       alert ("Please enter Password"); 
         
   // If confirm password not entered 
   else if (password2 == '') 
       alert ("Please enter confirm password"); 
         
   // If Not same return False.     
   else if (password1 != password2) { 
       alert ("\nPassword did not match: Please re-enter") 
       return false; 
   } 

   // If same return True. 
   else{ 
       return true; 
   } 
} 
$('#dropDown').on('change',function() {
    //var checked = $(this).is(':checked');
    if(this.checked){

//ajax call here for client page
else 
 {     $("#company").click(function () {
                if  ($(this).is(":checked")) {
                    $("#dvPassport").show();
                } else {
                    $("#dvPassport").hide();
                }
            });
        });

     var signUpPage =  {
         email: email,
         password: password1 || password2,
          client: client,
         company: company,
          broker: broker
     }
     var email = $("#email").val();
     var password =$("#password1").val();
     var client = $("#client").val();
     var company = $("#company").val();
     var broker = $("#broker").val();

$.ajax ({
    url: "/api/dealer",
    type: "post",
    data: signUpPage,
    dataType: 'json',
    success: () => {
    console.log(signUpInfo)
}
})     
    })
 })