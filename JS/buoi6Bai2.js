function tinhTong() {
  var txtSoThuNhat = document.getElementById("soThuNhat").value * 1;
  var txtSoThuHai = document.getElementById("soThuHai").value * 1;
  var sum = 0;
  for (i = 1; i <= txtSoThuHai; i++) {
    sum = sum + txtSoThuNhat ** i;
    console.log(sum);
    document.getElementById("xuatKetQua2").innerText = "Tổng là: " + sum;
  }
}
