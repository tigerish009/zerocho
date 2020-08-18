let tbody = document.querySelector('#table tbody');
let dataset = [];
document.querySelector('#exec').addEventListener('click', function() {
    let hor = parseInt(document.querySelector('#hor').value);
    let ver = parseInt(document.querySelector('#ver').value);
    let mine = parseInt(document.querySelector('#mine').value);
    console.log(hor, ver, mine);

    //무작위 숫자뽑기 공식 
    //지뢰위치
    let 후보군 = Array(hor * ver)
        .fill()
        .map(function (요소, 인덱스) {
            return 인덱스;
        });
    let 셔플 = [];

    while (후보군.length > 80) {
        let 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
        셔플.push(이동값);
    }
    console.log(셔플);

    //지뢰테이블 만들기
    
    for (let i = 0; i < ver; i += 1) {
        let arr = [];
        let tr = document.createElement('tr')
        for (let j = 0; j < hor; j += 1) {
            arr.push(1);
            let td = document.createElement('td');
            td.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                let 부모tr = e.currentTarget.parentNode;
                let 부모tbody = e.currentTarget.parentNode.parentNode;
                let 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                let 줄 = Array.prototype.indexOf.call(부모tbody.children, tr);
                console.log(부모tr, 부모tbody, e.currentTarget, 칸, 줄);
                e.currentTarget.textContent = '!';
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    //지뢰심기
    for (let k = 0; k < 셔플.length; k++) {
        let 세로 = Math.floor(셔플[k] / 10); 
        let 가로 = 셔플[k] % 10;
        console.log(세로, 가로);
        tbody.children[세로].children[가로].textContent = 'X';
        dataset[세로][가로] = 'X';
    }
    console.log(dataset);
});

tbody.querySelectorAll('td').forEach(function (td) {
    td.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        console.log('오른쪽 클릭');
    });
});