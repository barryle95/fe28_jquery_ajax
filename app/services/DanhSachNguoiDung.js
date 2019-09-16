function DanhSachNguoiDung() {
    /* Lấy thông tin người dùng */
    this.layDanhSachNguoiDung = function () {
        return $.ajax({
            url: "http://5d78df73a8c27100149866d4.mockapi.io/api/Users",
            type: "GET"
        })
    };
    /* Thêm người dùng */
    this.themNguoiDung = function (user) {
        return $.ajax({
            url: "http://5d78df73a8c27100149866d4.mockapi.io/api/Users",
            type: "POST",
            data: user,
        })
    }
}

/* Xóa người dùng
   Sử dụng prototype cho trường hợp viết tiếp từ chương trình cũ 
*/
DanhSachNguoiDung.prototype.xoaNguoiDung = function (id) {
    return $.ajax({
        url: "http://5d78df73a8c27100149866d4.mockapi.io/api/Users/" + id, //${id}
        type: "DELETE"
    })
}

DanhSachNguoiDung.prototype.layThongTinNguoiDung = function (id) {
    return $.ajax({
        url: "http://5d78df73a8c27100149866d4.mockapi.io/api/Users/" + id, //${id}
        type: "GET"
    })
}

DanhSachNguoiDung.prototype.capNhatNguoiDung = function (id, user) {
    return $.ajax({
        url: "http://5d78df73a8c27100149866d4.mockapi.io/api/Users/" + id, //${id}
        type: "PUT",
        data: user,
    })
}