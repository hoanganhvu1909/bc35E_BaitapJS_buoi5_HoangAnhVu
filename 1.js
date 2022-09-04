// bài 1: Quản ly tuyển sinh 
/**
 * Mô hình ba khối
 * Đầu vào:
 * - User nhập điểm chuẩn
 * - User chọn khu vực
 * - User chọn đối tượng
 * - User nhập điểm chuẩn
 * - User nhập điểm môn 1
 * - User nhập điểm môn 2
 * - User nhập điểm môn 3
 * Xử lý:
 * - Điểm ưu tiên: điểm khu vực + điểm ưu tiên
 * - Điểm tổng kết: điểm ưu tiên + điểm môn 1 + điểm môn 2 + điểm môn 3
 * - Nếu điểm tổng kết >= điểm chuẩn: đậu
 * - Nếu một trong ba môn có điểm 0: rớt
 * - Nếu điểm tổng kết < điểm chuẩn: rớt
 * Đầu ra
 * Hiển thị kết quả
 */

var btnkq = document.getElementById("btnkq");
btnkq.onclick = function () {

  //đầu vào

  var diemchuan = document.getElementById("dc").value;
  var diem_1 = document.getElementById("mon1").value * 1;
  var diem_2 = document.getElementById("mon2").value * 1;
  var diem_3 = document.getElementById("mon3").value * 1;
  var kvSelect = document.getElementById('kv').value * 1;
  // console.log('Option được chọn có giá trị: ' + kvSelect);
  var dtSelect = document.getElementById('dt').value * 1;
  //console.log('Option được chọn có giá trị: ' + dtSelect);
  switch (kvSelect) {
    case 2: kvSelect = 2; break;
    case 3: kvSelect = 1; break;
    case 4: kvSelect = 0.5; break;
  }
  //console.log('Option được chọn có giá trị: ' + kvSelect);
  switch (dtSelect) {
    case 2: dtSelect = 2.5; break;
    case 3: dtSelect = 1.5; break;
    case 4: dtSelect = 1; break;
  }
  //console.log('Option được chọn có giá trị: ' + dtSelect);

  // xử lý
  
  var diem_uu_tien = kvSelect + dtSelect;
  //console.log(diem_uu_tien);
  var diem_tong_ket = diem_1 + diem_2 + diem_3 + diem_uu_tien;
  //console.log(diem_tong_ket);
  if (diem_tong_ket >= diemchuan && diem_1 !== 0 && diem_2 !== 0 && diem_3 !== 0) {
    kq = "Bạn đã đậu. Tổng điểm: " + diem_tong_ket
  }
  else if (diem_1 === 0 || diem_2 === 0 || diem_3 === 0) {
    kq = "Bạn đã rớt. Có điểm bằng 0"
  }
  else {
    kq = "Bạn đã rớt. Tổng điểm: " + diem_tong_ket
  }

  //đầu ra
  document.getElementById("showInfokq").innerHTML = kq;

}
