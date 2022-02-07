// JSON là một kiểu định dạng dữ liệu(javascrip object notation)
// nó là một quy tắc định dạng chung cho dữ liệu
/**
    - giúp chúng ta định dạng các dữ liệu như number, object, string, array, boolean, null
 */

// một số ví dụ về khai báo JSON
var json = '1';
var json_5 = '"Phi"';
var json_1 = '["Javascrip", "PHP", "RUBY"]';
var json_2 = '{"name":"Phi Nguyen", "age": 20}'

// Khai báo biến trong javascrip

var js = ['SQL', 'C++', 'Java']


// chuyển từ dữ liệu JSON sang kiểu của javascrip
console.log(typeof JSON.parse(json_5))

// chuyển kiểu dữ liệu javascrip sang JSON
console.log(JSON.stringify(js))