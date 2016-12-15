$(document).ready(function () {
  var flavors = ["pistachio", "mint chcolate-chip", "rocky road", "cookies 'n cream"];
  flavors.forEach(function (flavor) {
    $("#flavors").append("<li>" + flavor + "<li>");
  });
});