/**
    Các kiểu dữ liệu trong Javascript
    1. Các kiểu dữ liệu nguyên thủy
        - Number
        - String
        - Boolean
        - Undifined
        - Null
        - Symbol
    2. Các kiểu dữ liệu phức tạp
        - Function
        - Object
    3. Kiểm tra kiểu dữ liệu
        console.log(typeof tên_biến)
 */


// Number type
var a = 3;
var b = 4;

/**
    + Cách kiểm tra số nguyên Number.isInterger(tên_biến)
    + Phương thức to string (chuyển đôi kiểu number sang kiểu string)
        + Cú pháp tên_biến.toString()
    
    + Phương thức to fixed (làm tròn số)
        + Cú pháp tên_biến.toFixed(số chữ số đằng sau dấu phẩy)
 */

// String type
var fullName = ' Nguyễn Bá Phi';

/**
    - Phép cộng thì nếu hai vế là số thì nó là phép toán số học còn nêu một trong hai vế là chuỗi thì sẽ là phép nối chuỗi
    - Làm việc với chuỗi

        + Phương thức indexOf (Tìm kiếm vị trí một chuỗi trong một chuỗi)
            + Nó chỉ trả về bị trí đầu tiên mà nó nhìn thấy và kết thúc tìm kiếm
            + Nếu không tìm thấy chuỗi thì kết quả nhận được là -1
            + Cú pháp tên_biến.indexOf(chuỗi cần tìm kiếm, ví trí bắt đầu)
        
        + Phương thức Slice (Cắt chuỗi từ môt chuỗi ban đầu)
            + Cú pháp tên_biến.slice(vị trí bắt đầu cắt, vị trí kết thúc)
            + Hoàn toàn có thế cắt ngược từ phải qua trái chỉ cần truyền tham số âm cho các vị trí
        
        + Phương thức Replace (Thay thế một chuỗi bằng một chuỗi)
            + Phương thức tên_biến.replace (chuỗi cần thay thế, chuỗi cần thay thế vào)
            + Nếu truyền chuỗi thông thường vào thì chỉ thay thế được một chuỗi đầu tiên khi thi tìm thầy còn nếu trong chuỗi
              có nhiều chuỗi cần thay thế thì sửa dụng biểu thức chính quy là "/chuỗi/g"
        
        + Phương thức Convert to upper case (Chuyển đổi tất cả các ký tụ trong chuỗi thành chữ in hoa)
            + Cú pháp tên_biến.toUpperCase() 
        + Phương thức Convert to lower case (Chuyển đổi tất cả các ký tự trong chuỗi thành chữ thường)
            + Cú pháp tên_biên.toLowerCase ()

        + Phương thức Trim (Loại bỏ khoảng trắng hai đầu của chuỗi)
            + Cú pháp tên_biến.trim()
        
        + Phương thức Split (Căt một chuỗi dựa trên một đặc điểm chung và lưu nó ra một Array)
            + Cú pháp tên_biến.split()
 */

// Boolean type
var isSuccess = true;

// Undifined type
var age;

// Null type
var isNull = null;

// Symbol type
var id = Symbol('id');

// Function type
/**
    + Decularation function
        function showMessage (){}

    + Expression function
        + var showMessage () {}
        + setTimeout (showMessage () {

        })
        + var myOject = {
            myFunction = function () {
                
            }
        };

 */
// var myFunction = function(){
//     alert('Hi xin chào các bạn');
// }
// myFunction();

// // Oject type
// var myOject = {
//     name: 'Phi Nguyễn',
//     age: 20,
//     adress: 'Thanh Hóa',
//     myFunction(){

//     }
// };


// // Mảng 
// var myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

/**
    + Làm việc với mảng
    + Phương thức To String (chuyển dữ liệu kiểu mảng sang chuỗi)
        + Cú pháp tên_mảng.toString()
        + Ký tự ngăn cách là dâu phẩy

    + Phương thức Join (Chuyển dữ liệu kiểu mảng sang chuỗi)
        + Cú pháp tên_mảng.join(kiểu ngăn cách)
        + Khác với toString thì join cho phép là tạo kiêu ngăn cách khi chúng ta truyền kiểu vào ví dụ như dấu cách
    
    + Phương thúc Pop
        + Cú pháp tên_mảng.pop()
        + Xóa phần từ cuối cùng của mảng và trả về phần tử đã xóa
    
    + Phương thức Push (Thêm phần tử vào cuối mảng)
        + Cú pháp tên_mảng.push(phần_tử thêm, phần thử thêm)
        + Có thể thêm một hoặc nhiều phần tử vào cuối mảng và trả về mảng mới 

    + Phương thức Shift
        + Cú pháp: tên_mảng.shift()
        + Xóa phần tử đầu mảng và trả về phần tử cần xóa
    
    + Phương thức Unshift
        + Cú pháp tên_mảng.unshift
        + Thêm một hay nhiều phần tử vào đầu mảng và trả về mảng mới

    + Phương thức Splice 
        + Dùng để xóa : tên_mảng.splice(vị trí đặt con trỏ, số lượng element xóa)
        + Dùng để chèn: tên mảng.splice(vị trí đặt con trỏ, số lượng element xóa, phàn tử cần thêm)

    + Phương thúc Concat 
        + Dùng để nối các mảng với nhau
        + Cú pháp: Mảng_thứ_1.concat(Mảng_thứ_2)

    + Phương thức slice
        + Dùng để cắt các phần tử của mảng và trả về mảng mới
        + Cú pháp: tên_mảng.slice(vị trí đặt con trỏ, vị trí kết thúc)
        + Có thể lấy ngược lại bằng cách truyền số âm cho vị trí

    + Phương thức Map
        + Dùng để thay đổi, làm việc với các element của mảng
        + Kết quẩ trả về là một mảng mới
        + Cú pháp: Mảng_mới = mảng _cũ.map(function(biến, chỉ số){

            return  // return cái gì thì element mới trả về cái đó
        })

        + biến : tùy đặt tên và nó có giá trị là bằng giá trị của các element trong mảng cũ
        + chỉ só: tương tự biến

    + Phương thức Reduce
        + Dùng để tính toán trong các element
        + Cú pháp: tên_mảng.reduce(function(biến lưu trữ, giá trị hiện tại){

            return  // return cái gì thì element mới trả về cái đó
        }, giá trị khởi tạo'initial value')
 */

    // var depthArray = [1, 2, 3, [4, 5], [6, 7], 8, 9];

    // var flatArray = depthArray.reduce(function(flatOuput, depthOuput){
    //     return flatOuput.concat(depthOuput);
    // }, [])

    // console.log(flatArray);


// var numbers = [1, 2, 3, 4, 5]

// Array.prototype.reduce2 = function (callback, result) {
//     let i = 0;
//     // Trường hợp mà không truyền initial value
//     // arguments.length đê xác định đối số truyền vào
//     if(arguments.length < 2){
//         i = 1;
//         result = this[0];
//     }
//     for(; i < this.length; i++) {
//         result = callback(result, this[i], i, this);
//     }
//     return result;
// }

// var result = numbers.reduce2((total, number) => {
//     return total + number;
// } ,0)

// console.log(result);

/**
    Math object
 */



// forEach

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'RUBY',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500,
    }
];

var result = courses.forEach(function(course, index) {
    // console.log(course,index);
});


// dung de kiem tra tat cac phan tu cua mang co thoa man 1 dieu kien hay k
var isFree = courses.every(function(course){
    return course.coin == 0;
});
// console.log(isFree);