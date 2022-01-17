function kiemTra(n) {
  var check = true;
  if (n < 2) {
    check = false;
  } else if (n == 2) {
    check = true;
  } else if (n % 2 == 0) {
    check = false;
  } else {
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        check = false;
        break;
      }
    }
  }
  return check;
}
function laySoNguyenTo() {
  var number = document.getElementById("nhapSoBai5").value * 1;
  var ketQua = "";
  for (var i = 1; i <= number; i++) {
    if (kiemTra(i)) {
      ketQua += i + "   ";
    }
  }
  document.getElementById("ketQuaBai5").innerHTML = ketQua;
}
// function laySoNguyenTo() {
//   var txtNumBer = document.getElementById("nhapSoBai5").value * 1;
//   var daySo = " ";
//   for (i = 1; i <= txtNumBer; i++) {
//     daySo += i + "   ";
//     if (i % 2 == 0) {
//     }
//   }
//   document.getElementById("").innerHTML = daySo;
// }
