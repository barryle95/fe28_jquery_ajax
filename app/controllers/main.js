$(document).ready(function () {
    var danhSachNguoiDung = new DanhSachNguoiDung();

    function themNguoiDung() { 
        console.log("themNguoiDung");
     }

    getListUser();


    function getListUser() {
        danhSachNguoiDung.layDanhSachNguoiDung()

            .done(function (result) {
                console.log(result);
                taoBang(result);
            })
            .fail(function (error) {
                console.log(error);
            })
    };


    $("#btnThemNguoiDung").click(function () {
        console.log(1);
        $(".modal-title").html("Thêm người dùng");
        var footer = `<button class="btn btn-danger" id="btnThem">Thêm</button>`

        $(".modal-footer").html(footer);
    })

    /* Thêm người dùng */
    $("body").delegate("#btnThem", "click", function () {
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = md5($("#MatKhau").val());
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var maLoaiNguoiDung = $("#loaiNguoiDung").val();

        var user = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);
        danhSachNguoiDung.themNguoiDung(user)

            .done(function (result) {
                console.log(result);

            })
            .fail(function (error) {
                console.log(error);
            })

        getListUser();
    })

    /* Xóa người dùng */
    $("body").delegate(".btnXoa", "click", function () {
        var id = $(this).data("id") + "";
        console.log(2);
        danhSachNguoiDung.xoaNguoiDung(id)

            .done(function (result) {
                console.log(result);
                getListUser()
            })
            .fail(function (error) {
                console.log(error);
            });
    })
    /* Sửa người dùng */
    $("body").delegate(".btnSua", "click", function () {
        var id = $(this).data("id");

        $(".modal-title").html("Sửa thông tin người dùng");

        var footer = `    
        <button id="btnCapNhat" class="btn btn-success" data-id="${id}">Cập nhật</button>
      `;

        $(".modal-footer").html(footer);

        danhSachNguoiDung.layThongTinNguoiDung(id)
            .done(function (result) {
                console.log(result);
                $("#TaiKhoan").val(result.taiKhoan);
                $("#HoTen").val(result.hoTen);
                ($("#MatKhau").val(result.matKhau));
                $("#Email").val(result.email);
                $("#SoDienThoai").val(result.soDT);
                $("#loaiNguoiDung").val(result.maLoaiNguoiDung);
            })
            .fail(function (error) {
                console.log(error);
            })
    })

    /* Cập nhật người dùng */
    $("body").delegate("#btnCapNhat", "click", function () {
        var id = $(this).data("id") + "";
        console.log(3);
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = md5($("#MatKhau").val());
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var maLoaiNguoiDung = $("#loaiNguoiDung").val();

        var user = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, maLoaiNguoiDung);

        danhSachNguoiDung.capNhatNguoiDung(id, user)

            .done(function (result) {
                console.log(result);
                getListUser();

            })
            .fail(function (error) {
                console.log(error);
            });
    })

    function taoBang(mangNguoiDung) {
        var content = "";
        mangNguoiDung.map(function (item, index) {
            content += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.hoTen}</td>
                <td>${md5(item.matKhau)}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>${item.maLoaiNguoiDung}</td>
                <td>
                    <button class="btnSua btn btn-info"  data-toggle="modal"
                    data-target="#myModal" data-id = "${item.id}">Sửa</button>
                    <button class="btnXoa btn btn-danger" data-id = "${item.id}">Xóa</button>
                </td>
            </tr>
            `;
        });
        $("#tblDanhSachNguoiDung").html(content);
    }



































})