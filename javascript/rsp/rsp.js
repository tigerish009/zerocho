let 이미지좌표 = '0'
let 가위바위보 = { //딕셔너리 자료구조
    바위 : '0',
    가위 : '-142px',
    보 : '-284px'
};
console.log(Object.entries(가위바위보));
function 컴퓨터의선택(이미지좌표) {
    return Object.entries(가위바위보).find(function(v) {
        return v[1] === 이미지좌표;
    })[0];
}
let 인터벌;
function 인터벌메이커() {
    인터벌 = setInterval(function () {
        if (이미지좌표 === 가위바위보.바위) {
            이미지좌표 = 가위바위보.가위;
        } else if (이미지좌표 === 가위바위보.가위) {
            이미지좌표 = 가위바위보.보;
        } else {
            이미지좌표 = 가위바위보.바위;
        }
        document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 이미지좌표
    }, 100);
}
인터벌메이커();

let 점수표 = {
    가위 : 1,
    바위 : 0,
    보 : -1
};
    
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(인터벌);
        setTimeout(function () {
            인터벌메이커();
        }, 1000);
        let 나의선택 = this.textContent;
        let 나의점수 = 점수표[나의선택];
        let 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)];
        console.log(나의선택, 컴퓨터의선택(이미지좌표));
        if (나의점수 - 컴퓨터점수 === 0) {
            console.log('비겼습니다.');
        } else if ([-1,2].includes(나의점수 - 컴퓨터점수)) {
            console.log('이겼습니다!!!');
        } else {
            console.log('졌습니다ㅠㅠㅠ');
        }
    });
});