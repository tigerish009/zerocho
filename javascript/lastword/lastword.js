let 바디 = document.body;
let 단어 = document.createElement('div');
단어.textContent = '애플';
document.body.append(단어);
let 폼 = document.createElement('form');
document.body.append(폼);
let 입력창 = document.createElement('input');
폼.append(입력창);
let 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);
let 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백함수 (이벤트) {
    이벤트.preventDefault();
    if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value;
        입력창.value = '';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
});

// let word = "애플";

// while (true) {
//     let answer = prompt(word);
//     if (word[word.length -1] === answer[0]) {
//         alert('OK!!!');
//         word = answer;
//     } else {
//         alert('Noooo!!!');
//     }
// }