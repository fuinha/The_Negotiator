$(document).ready(function (event) {
  $(".popApp").hide();

  $.get("/api/user_data").then(function(userData) {

  $.get("/api/contact/" + userData.id, data => {
    if (userData.id == userData.id) {
      $("#buttonUser").show();
      $("#newApp").attr("href", "/application?dealer=" + data.id)
    }

    $.get("/api/quotes", hello => {
    })

    var location = (data.state + ' , ' + data.zip)
    $('#fullName').html(data.owner)
    $('#busninessName').html(data.business_name)
    $('#typeOfBusiness').html(data.agent)
    $('#businessLocation').html(location)
    $('#email').html(data.email)
    $('#phoneNumber').html(data.phone_number);

    if (data.image ==""){
      $("#preferredImg").attr("src", "http://revivalsportscars.com/wp-content/uploads/2011/05/McLaren-P1-Paris-design-concept-carbon-side-closeup-door.jpg");
    }
    $("#preferredImg").attr("src", data.image);
    $(".fa-twitter").attr("href", data.twitter);
    $(".fa-linkedin").attr("href", data.linkedin);
    $(".fa-facebook").attr("href", data.facebook);
    $(".fa-car").attr("href", data.dealer_site);

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


  });
})
})
