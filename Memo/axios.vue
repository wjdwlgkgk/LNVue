import axios from 'axios';

const memo = { 
    title : '1번 사용자의 메모',
    content : '이것은 1번 사용자의 메모 내용입니다.',
}

axios.post('https://api.example.com/users/1/memo', memo)
.then(response => {
    alert('메모 생성에 성공하였습니다.'');
})
.catch(error =>{
    alert('메모 생성에 실패하였습니다.');
});

axios.get('https://api.example.com/users/1/memos')
.then(response => {
    alert('요청이 성공하였습니다.');
})
.catch(error =>{
    alert('요청이 실패하였습니다.');
})
.then(response => {
    alert('이 블록은 항상 실행됩니다.');
});


import axios from 'axios';

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['X-Example-Key'] = 'example';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.get('/users/1/memos');