function tinhGiaiThua() {
  var N = document.getElementById("nhapSo").value * 1;
  console.log(N);
  var answer = 1;
  for (i = 1; i <= N; i++) {
    answer = answer * i;
    console.log(answer);
    document.getElementById("xuatKetQua3").innerText = "Đáp số là: " + answer;
  }
}
