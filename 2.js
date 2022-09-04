// bài 2
/**
 * Mô hình 3 khối:
 * Đầu vào:
 * - User nhập vào tên
 * - User nhập vào số điện
 * Xử lý:
 * - Nếu sokw < 50: 500 * sokw
 * - Nếu 50 < sokw && sokw <= 100: kq = 500 * 50 + 650 * (sokw - 50)
 * - Nếu 100 < sokw && sokw <= 200: kq = 500 * 50 + 650 * 50 + 850 * (sokw - 50 - 50)
 * - Nếu 200 < sokw && sokw <= 350: 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (sokw - 50 - 50 - 100)
 * - Còn lại: 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (sokw - 50 - 50 - 100 - 150)
 * Đầu ra:
 * Kết quả: tên + tiền điện
 */

var btnKq = document.getElementById("btnKq");
btnKq.onclick = function () {
  var ten = document.getElementById("ten").value;
  var sokw = document.getElementById("sokw").value * 1;
  var kq = 0;
  var currentFormat = new Intl.NumberFormat("VN-vn");
  if (sokw <= 50) {
    kq = 500 * sokw;
  }
  else if (50 < sokw && sokw <= 100) {
    kq = 500 * 50 + 650 * (sokw - 50);
  }
  else if (100 < sokw && sokw <= 200) {
    kq = 500 * 50 + 650 * 50 + 850 * (sokw - 50 - 50);

  }
  else if (200 < sokw && sokw <= 350) {
    kq = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (sokw - 50 - 50 - 100);
  }
  else {
    kq = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (sokw - 50 - 50 - 100 - 150);
  }
  var result = currentFormat.format(kq);
  document.getElementById("showInfoKq").innerHTML = "tồng tiền điện: " + ten + " đã sử dụng là: " + result;

}
