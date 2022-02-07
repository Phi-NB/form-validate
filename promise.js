/**
    Callback: nó là hàm và được truyền qua đối số  
 */


/**
    - Promise: Dùng để xử lý các thao tác bất đông bộ n
    - Trước khi có Promise thì chúng ta phải sửa dụng Callback. khi mà sửa dụng Callback thì với một số công việc nó giọi lại nhiều Callback gây rối code khó hiểu (Callback hell)
    - có 3 trạng thái 
        + Pendding (đang chờ đợi)
        + Fufilled (thành công)
        + Reject (thất bại)
 */

// var promise = new Promise(
//     //Excutor
//     function(resolve, reject) {
//         //Logic
//         // Thành công: resolve()
//         // Thất bại: reject()

//     }
// );

// phải luôn luôn phải gọi 1 trong hai hàm resolve() hoặc reject() trong Excutor. Nếu không gọi 1 trong hai hàm này thì Promise sẽ rơi vào trạng thái treo (Memnory leak) nó gây lãng phí bộ nhớ

// promise
//     .then(function() {

//     })
//     .catch(function() {

//     })
//     .finally(function() {

//     })

var user = [
    {
        id: 1,
        name: 'Phi Nguyen'
    },
    {
        id: 2,
        name: 'Nguyen Son'
    },
    {
        id: 3,
        name: 'Nguyen Hung'
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Xong bai tap lon chua ban'
    },
    {
        id: 2,
        user_id: 2,
        content: 'OK het roi nha ban'
    },
    {
        id: 3,
        user_id: 1,
        content: 'OK ban'
    },
    {
        id: 4,
        user_id: 2,
        content: 'Toi hop k'
    }
];

// // lấy danh sach noi dung comment nội dung comment
function getComment(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(comments);
        }, 1000);
    }); 
}
// lấy ra danh sách user
function getUserByIds(userIds) {
    return new Promise((resolve) => {
        var result = user.filter((user) => {
            return userIds.includes(user.id);
        });
        resolve(result);
    });
}

getComment()
    .then((comments) => {
        var userIds = comments.map((comment) => {
            return comment.user_id;
        });
        return getUserByIds(userIds)
            .then((users) => {
                return {
                    users: users,
                    comments: comments
                };
            });
    })
    .then((data) => {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach((comment) => {
            var user = data.users.find((user) => {
                return user.id === comment.user_id;
            });
            html += `<li>
                        <span>${user.name} :</span>
                        <span>${comment.content}</span>
                    </li>`       
        });
        commentBlock.innerHTML = html;
    }); 

