// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng
// được.
// function binhphuong (){
//    let a = prompt("nhap");
//    let b = a*a
//    console.log(b);
// }binhphuong()

// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
// function hinhTron (){
//     let banKinh = prompt("nhap")
//    let a = Math.PI*banKinh*banKinh
//     console.log(a);

//        let chuVi = prompt("nhap");
//        let b = 2*Math.PI*chuVi
//        console.log(b);

// }hinhTron()

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây
// dựng được.
//  function giaoThua(){
//     let a = prompt("nhap") 
//     if (a % 2 !== 1){
//         console.log("la so nguyen");
//     }else{
//         console.log("khong la so nguyen");
//     }
//  }giaoThua()

// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
// function giTri() {
//     let b = prompt("nhap");
//     let c = prompt("nhap");
//     let d = prompt("nhap");
//     if (b <= c && b <= d) {
//         console.log(` ${b} la so nho nhat`);
//     } else if (c <= b && c <= d ) {
//         console.log(` ${c} la so nho nhat`);
//     }else if ( d <= b && d <= c ){
//         console.log(`${d} la so nho nhat`);

//     }else{
//         console.log(  "la so nho nhat"  );
//     }


// }
// giTri()

// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm
// trả về true, ngược lại trả về false.
function an (){
    let a = prompt("nhap so:");
    if (!a.match(/^\d+/)){
        console.log("false");
    }else{
        console.log("true");
    }
}an()

// 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
// function truyen() {
    // let a = prompt("nhap 2 so nguyen to").split(",");
    // let a = [1,2];
    // let b = [a[0],a[1]]=[a[1],a[0]];
    // console.log(b);
    // let bientam = a[0];
    // a[0] = a[1]
    // a[1] = bientam
    // console.log(a);
// } truyen()

// 6: Viết hàm nhận vào một s;ố, kiểm tra xem nếu số đưa vào có phải là nguyên dương
// không. Nếu là nguyên dương trả về true, ngược lại trả về false.

// function kiemTra(){
//     let a = prompt("nhap so");
//     if (Number(a) > 0){
//         console.log("true");
//     }else if (Number(a) < 0) {
//         console.log("false");
//     }else {
//         console.log("bang ca hai");
//     }
// }kiemTra()