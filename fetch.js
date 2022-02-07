/* 
    - fetch dùng để lấy dữ liệu back-end trả về

*/
var postAPI = 'https://jsonplaceholder.typicode.com/users';

fetch(postAPI)
    .then(function (response) {
        return response.json();
        //chuyển luôn từ JSON sang javascrip type
    })
    .then(function (post){
        console.log(post)
    })
