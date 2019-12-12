$(document).ready(function(event) {

$.get("/api/applications", appData => {
        var newDiv="";

        for (var i=0; i <appData.length; i++) {
            newDiv += "<a href='/view_application?id="+appData[i].id+"'><div class='appBox'>";
            newDiv += "<h3>"+appData[i].dealer.business_name+"</h3><br><br>";
            newDiv += "owner: "+appData[i].dealer.owner+"<br>";
            var date = appData[i].dealer.createdAt;
            dateSplit = date.split("T");
            newDiv += "created on " + dateSplit[0] + "<br>"+appData[i].dealer.state+"</div></div></a>";   
        }
    $(".collectApps").prepend(newDiv);
  });
});