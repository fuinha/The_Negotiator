$(document).ready(function (event) {
  $(".popApp").hide();
  var id = window.history.id;
  getid(id);
});

function getid(id) {


  $.get("/api/contact/" + id, data => {
    if (id == data.id) {
      $("#buttonUser").show();
      $("#makeApp").attr("data-id", data.id)
      $("#newApp").attr("href", "/application?dealer=" + data.id)
    }
    console.log(data)


    var location = (data.state + ' , ' + data.zip)
    $('#fullName').html(data.owner)
    $('#busninessName').html(data.business_name)
    $('#typeOfBusiness').html(data.agent)
    $('#businessLocation').html(location)
    $('#email').html(data.email)
    $('#phoneNumber').html(data.phone_number)
    console.log(data)

    //on click view the apps
    $(".viewApp").on("click", data => {
      $(".viewApp").hide()
      $(".popApp").show()
    });
      //applications loaded
      var appsLoaded = "";
      for (var i = 0; i < data.Applications.length; i++) {
        appsLoaded += "<div class='apps'><a href='/view_application?id="+data.Applications[i].id+"'>";
        dataCreated = data.Applications[i].createdAt
        created = dataCreated.split("T")
        appsLoaded += "Date Created: " + created[0] + "<br>"
        appsLoaded += "<br>" + data.Applications[i].insurance_type + "<br><br>";
        appsLoaded += "Nature of Business: <br>" + data.Applications[i].business_nature + "</a></div>";
      }
      $(".popApp").html(appsLoaded)

    //load all applications
    
  });
}
