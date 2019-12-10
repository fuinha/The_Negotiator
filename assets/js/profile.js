$(document).ready(function(){
    $("#clientInfo").on("submit", function(event){
       event.preventDefault()
     var Application =  {
        years_inBusiness: businessYears,
        businessOpen_years: openYears,
        additional_addresse: additionalAddresses,
        previous_insuranceNamet: previousInsurance,
        revious_insuranceYears: previousInsuranceYears,
        previous_insuranceClaims: previousClaims,
        num_employees: numberOfEmployees,
        drivers_license: driversLicense,
        dob_employees: DOBemployees,
        furnished: furnished,
        employee_title: employeeTitle,
        recent_accidents: recentAccidents,
        business_nature:  businessNature,
        insurance_type: insuranceType,
        miles_driven: milesDriven,
        num_lotCars: numLotCars,
        lot_worth: lotWorth,
        num_plates:  numPlates,
        lot_protection: lotProtection

     }

     var businessYears = $("#businessYears").val();
     var openYears = $("#openYear").val();
     var additionalAddresses = $("#additionalAddresses").val();
     var previousInsurance  = $("#previousInsurance").val();
     var previousInsuranceYears = $("#previousInsuranceYears").val();
     var previousClaims = $("#previousClaims").val();
     var numberOfEmployees = $("#numberOfEmployees").val();
     var driversLicense = $("#driversLicense").val();
     var DOBemployees = $("#DOBemployees").val();
     var furnished = $("#furnished").val();
     var employeeTitle = $("#employeeTitle").val();
     var recentAccidents = $("#recentAccidents").val();
     var businessNature = $("#businessNature").val();
     var insuranceType = $("#insuranceType").val();
     var milesDriven = $("#milesDriven").val();
     var numLotCars = $("#numLotCars").val();
     var lotWorth = $("#lotWorth").val();
     var numPlates = $("#numPlates").val();
     var lotProtection = $("#lotProtection").val();
    

$.ajax ({
    url: "/api/applications",
    type: "post",
    data: Application,
    dataType: 'json',
    success: () => {
    console.log(Application)
}
})     
    })
 })