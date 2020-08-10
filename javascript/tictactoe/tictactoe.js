let 바디 = document.body;
let 테이블 = document.createElement('table');
let 줄들 = [];
let 칸들 = [];
let 턴 = 'X';
let 결과 = document.createElement('div');

let 비동기콜백 = function(이벤트) {

    let 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    console.log('몇줄', 몇줄);
    let 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    console.log('몇칸', 몇칸);

    if (칸들[몇줄][몇칸].textContent !== '') {
        console.log('빈칸아닙니다');
    } else { //빈칸이면
        console.log('빈칸입니다');
        칸들[몇줄][몇칸].textContent = 턴;

    let 다참 = false;
    //가로줄 검사
    if (
        칸들[몇줄][0].textContent === 턴 && 
        칸들[몇줄][1].textContent === 턴 && 
        칸들[몇줄][2].textContent === 턴
    ) {
        다참 = true;     
    }
    //세로줄 검사
    if (
        칸들[0][몇칸].textContent === 턴 && 
        칸들[1][몇칸].textContent === 턴 &&
        칸들[2][몇칸].textContent === 턴
    ) {
        다참 = true;
    }
    //대각선 검사
    if (몇줄 - 몇칸 === 0 || Math.abs(몇줄 - 몇칸) === 2) { // 대각선 검사 필요한 경우
        if (칸들[0][0].textContent === 턴 &&
            칸들[1][1].textContent === 턴 &&
            칸들[2][2].textContent === 턴
        )
        다참 = true;
    }
    if (다참) {
        결과.textContent = 턴 + '님이 승리!';
        //초기화
        턴 = 'X';
        칸들.forEach(function (줄) {
            줄.forEach(function (칸) {

            });
        })
    } else { //다 안찼으면
        if (턴 === 'X') {
            턴 = 'O';
        } else {
            턴 = 'X';
        }
    }
    }
}

for ( let i = 1; i <= 3; i += 1) {
    let 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for ( let j = 1; j <= 3; j += 1) {
        let 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        칸들[i - 1].push(칸);
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log(줄들, 칸들);
