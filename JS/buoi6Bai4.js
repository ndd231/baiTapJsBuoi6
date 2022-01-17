var result = "";
for (var i = 1; i <= 10; i++) {
  result += "<div>Dòng: " + i + "</div>";
  document.getElementById("ketQuaBai4Chan").innerHTML = result;
  function doiMauTheDiv() {
    var theDiv = document.getElementsByTagName("div");
    for (var i = 1; i <= 10; i++) {
      if (i % 2 == 0) {
        theDiv[i].style.background = "red";
      } else {
        theDiv[i].style.background = "blue";
      }
    }
  }
}
