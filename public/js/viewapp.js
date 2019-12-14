$(document).ready(function (event) {

  var url = window.location.search;

  //call app data by url request
  if (url.indexOf("?id=") !== -1) {
    id = url.split("=")[1];
    getid(id);
  }
});

function getid(id) {
  //GET individual app data
  $.get("/api/applications/" + id, data => {
console.log(data)
    //turn the t/f to yes/no
    if (data.furnished == true) {
      furnishing = "yes";
    } else {
      furnishing = "no";
    }

    //turn the t/f to yes/no
    var accidents;
    if (data.recent_accidents) {
      accidents = "yes";
    } else {
      accidents = "no"
    }

    //populate the following information into the form
    var newDiv = "<div class='boxForm'><h3>Car Dealership Insurance Form</h3><br><br>" +
      "<div class='personalInfo'><h4 style='text-align:center;'>Personal Information</h4><hr><h4>Business Name: " + data.dealer.business_name + "</h4><br>Business Owner:" +
      data.dealer.owner + "<br><br>Address: " + data.dealer.address + ", " + data.dealer.state + ", " + data.dealer.zip + "<br> Additional Addresses:" + data.additional_addresses +
      "<br><br>Years in Industry: " + data.years_inBusiness + "<br>Dealership Years: " + data.businessOpen_years + "<br>Phone Number: " + data.dealer.phone_number + "<br>Email:" + data.dealer.email +
      "<br>" +
      "</div>" +
      "<br><br><div class='businessInfo'><h4 style='text-align:center;'>Business Information</h4><hr><br>" +
      "Previous Insurance Company: " + data.previous_insuranceName + "<br>" +
      "Years with Previous Insurance Company: " + data.previous_insuranceYears + "<br>" +
      "Previous claims: " + data.previous_insuranceClaims + "<br>" +
      "Nature of Business" + data.business_nature +

      "</div>" +
      "<br><br><div class='employeeInfo'><h4 style='text-align:center;'>Employee Information</h4><hr><br>" +
      "Owner Name: " + data.dealer.owner + "<br><br>" +
      "Date of Birth: " + data.dob_employees + "<br>" +
      "Driver's License No.: " + data.drivers_license + "<br>" +
      "Furnished: " + furnishing + "<br>" +
      "Accidents in Past 3 Years: " + accidents + "<br>" +
      "No. Employees: " + data.num_employees + "<br>" +
      "</div>" +
      "<br><br><div class='insuranceInfo'><h4 style='text-align:center;'>Insurance Information</h4><hr><br>" +
      "Quote Request: " + data.insurance_type + "<br>" +
      "Mileage Cars Driven: " + data.miles_driven + "<br>" +
      "No. of Plates: " + data.num_plates + "<br>" +
      "No. of Cars on the Lot: " + data.num_lotCars + "<br>" +
      "Worth of Lot:" + data.lot_worth + "<br>" +
      "Description Lot Protection: " + data.lot_protection +
      "<hr></div>";

    $(".appBody").html(newDiv);

    //allows Deletion of Application for user only
    $("#delete").on("click", function () {
      $.ajax({
        url: "/api/applications/" + data.id,
        type: "DELETE",
        data: {
          id: data.id
        }
      }).done(function (dataLike) {
        window.location.href = "/service";
      });
    });

    '<input type="text" id="year_business" value="'++'">'
    '<input type="text" id="yearDealer" value="">'
    '<input type="text" id="address" value="">'
    '<input type="text" id="prev_names" value="">'
    '<input type="text" id="" value="'++''">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'
    '<input type="text" id="" value="">'



  
  var year_business = $("#year_business").val().trim();
  var yearDealer = $("#yearDealer").val();
  var address = $("#address").val().trim();
  var prev_names = $("#prev_names").val().trim();
  var prev_years = $("#prev_years").val().trim();
  var claims = $("#claims").val().trim();
  var employee = $("#employee").val().trim();
  var license = $("#license").val().trim();
  var dob = $("#dob").val();
  var furnished = $("#furnished").val();
  var employee = $("#employee").val();
  var accidents = $("#accidents").val();
  var business_type = $("#business_type").val();
  var insurance = $("#insurance").val();
  var miles = $("#miles").val().trim();
  var time = $("#time").val();
  var lot = $("#lot").val().trim();
  var worth = $("#worth").val().trim();
  var plates = $("#plates").val().trim();
  var security = $("#security").val();

  var editApp = {
      years_inBusiness: year_business,
      businessOpen_years: yearDealer,
      additional_addresses: address,
      previous_insuranceName: prev_names,
      previous_insuranceYears: prev_years,
      lot_protection: security,
      num_employees: employee,
      previous_insuranceClaims: claims,
      drivers_license: license,
      dob_employees: dob,
      furnished: furnished,
      employee_title: time,
      recent_accidents: accidents,
      business_nature: business_type,
      insurance_type: insurance,
      miles_driven: miles,
      num_lotCars: lot,
      lot_worth: worth,
      num_plates: plates
}
console.log(editApp)

    
$("#update").on("click", function() {
  $.ajax({
    type: "PUT",
    url: "api/applications/" + data.id, 
    data: {
      id : data.id
    }
  }).done(function(){
    window.location.href = "/view_application?id="+data.id
  });
})




    })
}