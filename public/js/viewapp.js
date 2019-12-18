$(document).ready(function (event) {
  $(".appPop").hide();
  $(".btnHome").hide();

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
      "<div class='personalInfo'><h4 style='text-align:center;'>Personal Information</h4><hr><label>Business Name: </label><br><span>" + data.dealer.business_name + "</span></h4><br><label>Business Owner:</label><br><span>" +
      data.dealer.owner + "</span><br><br><label>Address: </label><br><span>" + data.dealer.address + ", " + data.dealer.state + ", " + data.dealer.zip + "</span><br><label> Additional Addresses:</label><br><span>" + data.additional_addresses +
      "</span><br><br><label>Years in Industry: </label><br><span>" + data.years_inBusiness + "</span><br><label>Dealership Years: </label><br><span>" + data.businessOpen_years + "</span><br><label>Phone Number:</label> <br><span>" + data.dealer.phone_number + "</span><br><label>Email:</label><br><span>" + data.dealer.email +
      "</span><br></div>" +
      "<br><br><div class='businessInfo'><h4 style='text-align:center;'>Business Information</h4><hr><br>" +
      "<label>Previous Insurance Company: </label><br><span>" + data.previous_insuranceName + "</span><br>" +
      "<label>Years with Previous Insurance Company: </label><br><span>" + data.previous_insuranceYears + "</span><br>" +
      "<label>Previous claims: </label><br><span>" + data.previous_insuranceClaims + "</span><br>" +
      "<label>Nature of Business: </label><br><span>" + data.business_nature +
      "</span></div>" +
      "<br><br><div class='employeeInfo'><h4 style='text-align:center;'>Employee Information</h4><hr><br>" +
      "<label>Owner Name:</label><br><span>" + data.dealer.owner + "</span><br><br>" +
      "<label>Date of Birth: </label><br><span>" + data.dob_employees + "</span><br>" +
      "<label>Driver's License No.: </label><br><span>" + data.drivers_license + "</span><br>" +
      "<label>No. Employees: </label><br><span>" + data.num_employees + "</span><br>" +
      "</div>" +
      "<br><br><div class='insuranceInfo'><h4 style='text-align:center;'>Insurance Information</h4><hr><br>" +
      "<label>Quote Request: </label><br><span>" + data.insurance_type + "</span><br>" +
      "<label>Mileage Cars Driven: </label><br><span>" + data.miles_driven + "</span><br>" +
      "<label>No. of Plates: </label><br><span>" + data.num_plates + "</span><br>" +
      "<label>No. of Cars on the Lot: </label><br><span>" + data.num_lotCars + "</span><br>" +
      "<label>Worth of Lot: </label><br><span>" + data.lot_worth + "</span><br>" +
      "<label>Description Lot Protection: </label><br><span>" + data.lot_protection +
      "</span><hr></div>";

    $(".appBody").html(newDiv);

    $.get("api/user_data", userData =>{
      if (userData.id === data.dealer.id){
        $(".btnHome").show();
      }
    })

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

    var stuff = '<div class ="personalCorrect" ><p>Personal Information</p><label for="year_business">Years in Business</label><br><input type="text" id="year_business" value="' + data.years_inBusiness + '"><br>' +
      '<label for="yearDealer">Dealership Years</label><br>' +
      '<input type="text" id="yearDealer" value="' + data.businessOpen_years + '"><br>' +
      '<label for="address">Additional Addresses</label><br>' +
      '<input type="text" id="address" value="' + data.additional_addresses + '"></div><br><br>' +

      '<div class="previousCorrect"><p>Business Information</p><label for="prev_names">Previous Insurance Name</label><br><input type="text" id="prev_names" value="' + data.previous_insuranceName + '"><br>' +
      '<label for="prev_years">Years Held Previous Insurance:</label><br>' +
      '<input type="text" id="prev_years" value="' + data.previous_insuranceYears + '"><br>' +
      '<label for="claims">Any Claims from Previous Insurance?</label><br>' +
      '<input type="text" id="claims" value="' + data.previous_insuranceClaims + '"><br>' +
      '<label for="business_type">What is the Nature of your Business?</label><br>' +
      '<input type="text" id="business_type" value="' + data.business_nature + '"></div><br><br>' +

      '<div class="businessCorrect"><p>Employee Information</p><label for="employee">Number of Employees:</label><br><input type="text" id="employee" value="' + data.num_employees + '"><br>' +
      '<label for="license">Driver\'s License:</label><br>' +
      '<input type="text" id="license" value="' + data.drivers_license + '"><br>' +
      '<label for="dob">Date of Birth:</label><br>' +
      '<input type="text" id="dob" value="' + data.dob_employees + '"><br>' +

      '<div class="insuranceCorrect"><p>Insurance Information</p><label for="insurance">Type of Insurance Requesting: </label><br><input type="text" id="insurance" value="' + data.insurance_type + '"><br>' +
      '<label for="miles">Miles Driving Cars to Lot:</label><br>' +
      '<input type="text" id="miles" value="' + data.miles_driven + '"><br>' +
      '<label for="time">Full-Time or Part-time</label><br>' +
      '<input type="text" id="time" value="' + data.employee_title + '"><br>' +
      '<label for="lot">Estimated Number of Cars on Lot</label><br>' +
      '<input type="text" id="lot" value="' + data.num_lotCars + '"><br>' +
      '<label for="worth">Total Worth of Cars on Lot</label><br>' +
      '<input type="text" id="worth" value="' + data.lot_worth + '"><br>' +
      '<label for="plates">Number of Dealership Plates</label><br>' +
      '<input type="text" id="plates" value="' + data.num_plates + '"><br>' +
      '<label for="security">Lot Protection</label><br>' +
      '<input type="text" id="security" value="' + data.lot_protection + '"></div><br><br><button class="btnApp" id="submitEdits">Submit Edits</button><button class="btnApp" id="close">Close Edits</button>';


    $(".appPop").html(stuff)
    $("#edit").on("click", onClick => {
      $(".appPop").show();
    })
    $("#close").on("click", function() {
      $(".appPop").hide();
    })

    $("#submitEdits").on("click", click => {
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
        num_plates: plates,
        id: data.id
      }


      $("#submitEdits").on("click", function () {
        $.ajax({
          method: "PUT",
          url: "api/applications/" + data.id,
          data: editApp
        }).done(function () {
          window.location.href = "/view_application?id=" + data.id
        });
      });
    });
  });
};