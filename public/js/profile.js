$(document).ready(function(event) {

var id = window.history.id;
  getid(id);
});

function getid(id) {


  $.get("/api/contact/" + id, data =>  {
    if (id == data.id) {
      $("#buttonUser").show();
      $("#makeApp").attr("data-id", data.id)
      $("#newApp").attr("href", "/application?dealer="+data.id)
    } 
    
  var location = (data.state + ' , ' + data.zip)
  $('#fullName').html(data.owner)
  $('#busninessName').html(data.business_name)
  $('#typeOfBusiness').html(data.agent)
  $('#businessLocation').html(location)
  $('#email').html(data.email)
  $('#phoneNumber').html(data.phone_number)
  console.log(data)
    

   })
  }
