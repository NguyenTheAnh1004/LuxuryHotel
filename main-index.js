var listRoom = [
    [
        'https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,q_85/w_300,c_fill/travelapi/38000000/37160000/37152100/37152011/4d9d9cd6_z.jpg',
        '2 giường đơn tiêu chuẩn',
        '280,000'
    ],
    [
        'https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,q_85/w_300,c_fill/travelapi/38000000/37160000/37152100/37152011/d0012fe3_z.jpg',
        '2 giường đơn Deluxe',
        '310,000'
    ],
    [
        'https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,q_85/w_300,c_fill/agodahotel/7295630/-1/4ca139f3b38e5c25ce8b71cd7223e3ba.jpg',
        '1 giường đôi lớn',
        '350,000'
    ],
    [
        'https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,q_85/w_300,c_fill/travelapi/38000000/37160000/37152100/37152011/11995fcc_z.jpg',
        '1 giường đôi lớn',
        '380,000'
    ],
    [
        'https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,q_85/w_300,c_fill/agodahotel/7295630/-1/c97cfecba7dd69f26995230040775b85.jpg',
        '1 giường đôi lớn',
        '410,000'
    ],
    [
        'https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,q_85/w_300,c_fill/travelapi/38000000/37160000/37152100/37152011/343307b3_z.jpg',
        '1 giường lớn',
        '450,000'
    ],
];

sessionStorage.clear();

function datPhong(index) {
    sessionStorage.setItem('image', listRoom[index][0]);
    sessionStorage.setItem('title', listRoom[index][1]);
    sessionStorage.setItem('price', listRoom[index][2]);
}