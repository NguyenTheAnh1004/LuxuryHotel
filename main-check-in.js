var image = sessionStorage.getItem('image');
var title = sessionStorage.getItem('title');
var price = sessionStorage.getItem('price');

var boxPrice = document.querySelector('.price__price');
var boxTitle = document.querySelector('.box-selected-room__title-selected-room');
var boxImage = document.querySelector('.box-selected-room__image-selected-room');

boxPrice.textContent = `${price} đ`;
boxTitle.textContent = `${title}`;
boxImage.setAttribute('src', `${image}`);

function clickSubmit() {
    var inputCheckIn = document.getElementsByClassName('form__check-in')[0].value;
    var inputCheckOut = document.getElementsByClassName('form__check-out')[0].value;
    var inputAdult = document.getElementsByClassName('form__adults')[0].value;
    var inputChild = document.getElementsByClassName('form__children')[0].value;
    var inputLastName = document.getElementsByClassName('form__last-name')[0].value;
    var inputFirstName = document.getElementsByClassName('form__first-name')[0].value;
    var inputEmail = document.getElementsByClassName('form__email')[0].value;
    var inputPhone = document.getElementsByClassName('form__phone')[0].value;
    var inputAddress = document.getElementsByClassName('form__address')[0].value;

    if(inputCheckIn == "" || inputCheckOut == "" || inputAdult == 0 || inputLastName == "" || inputFirstName == "" || inputEmail == "" || inputPhone == "" || inputAddress == "") {
        alert('Quý khách chưa nhập đủ thông tin.');
    }
    else {
        var dateCheckIn = new Date(inputCheckIn);
        var dateCheckOut = new Date(inputCheckOut);
    
        var strCheckIn = dateCheckIn.getDate().toString() + "/" + (dateCheckIn.getMonth() + 1).toString() + "/" + dateCheckIn.getFullYear().toString();
        var strCheckOut = dateCheckOut.getDate().toString() + "/" + (dateCheckOut.getMonth() + 1).toString() + "/" + dateCheckOut.getFullYear().toString()
    
        var people = inputAdult * 1 + inputChild * 1;

        var dayCount = (dateCheckOut.getTime() - dateCheckIn.getTime()) / (24 * 60 * 60 * 1000);
        var temp = (dayCount * 50000).toString();
        var priceServices = temp.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        var totalPrice = (price.replace(/,/, '.') * 1000 + priceServices.replace(/,/, '.') * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        alert('Đang tiến hành đặt phòng. Vui lòng đợi trong giây lát...');

        setTimeout(function() {
            alert(`                                 GIẤY XÁC NHẬN ĐẶT PHÒNG
    Rất cảm ơn quý khách đã quan tâm đến khách sạn của chúng tôi
    Chúng tôi xin được xác nhận các thông tin sau:
Mã: 543532
----------------------------------------------------------------------------
| Tên khách:      ${inputLastName} ${inputFirstName}
| Địa chỉ:           ${inputAddress}
| Số điện thoại: ${inputPhone}
| Ngày đến: ${strCheckIn}               Ngày đi: ${strCheckOut}
----------------------------------------------------------------------------

Thông tin chi tiết:
----------------------------------------------------------------------------
| Phòng đặt: 1
| Số người: ${people}
| Giá phòng: ${price} đ
| Phí dịch vụ: ${priceServices} đ
| Tổng tiền: ${totalPrice} đ
----------------------------------------------------------------------------`);
        }, 5000);
    }
}

function checkin() {
    var inputCheckIn = document.getElementsByClassName('form__check-in')[0].value;
    if(inputCheckIn != " ") {
        var value = document.getElementsByClassName('check-in__value')[0];
        value.textContent = inputCheckIn;
        if(document.getElementsByClassName('check-in__value')[0].textContent != " " && document.getElementsByClassName('check-out__value')[0].textContent != " ") {
            var checkIn = new Date(document.getElementsByClassName('check-in__value')[0].textContent);
            var checkOut = new Date(document.getElementsByClassName('check-out__value')[0].textContent);

            var dayCount = (checkOut.getTime() - checkIn.getTime()) / (24 * 60 * 60 * 1000);
            if(dayCount < 0) alert('Quý khách nhập ngày trả phòng không hợp lệ.\r\nVui lòng nhập lại.');
            else document.getElementsByClassName('nights__value')[0].textContent = dayCount.toString() + ' Đêm';

            var temp = (dayCount * 50000).toString();
            var priceServices = temp.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            if(priceServices != "NaN") document.getElementsByClassName('services__value')[0].textContent = priceServices + ' đ';
        }
    }
}

function checkout() {
    var inputCheckOut = document.getElementsByClassName('form__check-out')[0].value;
    if(inputCheckOut != " ") {
        var value = document.getElementsByClassName('check-out__value')[0];
        value.textContent = inputCheckOut;
        if(document.getElementsByClassName('check-in__value')[0].textContent != " " && document.getElementsByClassName('check-out__value')[0].textContent != " ") {
            var checkIn = new Date(document.getElementsByClassName('check-in__value')[0].textContent);
            var checkOut = new Date(document.getElementsByClassName('check-out__value')[0].textContent);

            var dayCount = (checkOut.getTime() - checkIn.getTime()) / (24 * 60 * 60 * 1000);
            if(dayCount < 0) alert('Quý khách nhập ngày nhận phòng hoặc ngày trả phòng không hợp lệ.\r\nVui lòng nhập lại.');
            else document.getElementsByClassName('nights__value')[0].textContent = dayCount.toString() + ' Đêm';
            
            var temp = (dayCount * 50000).toString();
            var priceServices = temp.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

            if(priceServices != "NaN") document.getElementsByClassName('services__value')[0].textContent = priceServices + ' đ';
        }
    }
}

function adults() {
    var inputAdults = document.getElementsByClassName('form__adults')[0].value;
    if(inputAdults != 0) {
        document.getElementsByClassName('adults__value')[0].textContent = inputAdults + ' Người lớn';
    }
    else document.getElementsByClassName('adults__value')[0].textContent = '';
}

function child() {
    var inputChildren = document.getElementsByClassName('form__children')[0].value;
    if(inputChildren != 0) {
        document.getElementsByClassName('children__value')[0].textContent = inputChildren + ' Trẻ em';
    }
    else document.getElementsByClassName('children__value')[0].textContent = '';
}

