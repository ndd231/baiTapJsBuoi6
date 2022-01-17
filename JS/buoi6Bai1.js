function demSo() {
  var sum = 0;
  for (N = 0; sum < 10000; N++) {
    sum = sum + N;
    console.log(sum);
  }
  document.getElementById("xuatKetQua").innerText = "Số N là: " + N;
}
