/* START TASK 1*/
const two = 2;
const three = 3;
const six = 6;
const five = 5;
const seven = 7;
const eight = 8;
const divs = document.querySelectorAll('td');
for (let i = 0; i < divs.length; i++) {
    if (i === 0 || i === three || i === six) {
        divs[i].onclick = function () {
            if (i === six) {
                this.classList.toggle('highlight2');
                this.classList.add('highlight3');
            }
            this.classList.add('highlight3');
        }
    } else if (i === six || i === seven || i === eight) {
        divs[i].onclick = function () {
            this.classList.toggle('highlight2');
            this.classList.add('highlight3');
        }
    } else if (divs[i]) {
        divs[i].onclick = function (e) {
            e.target.className = 'highlight1';
        }
    } else {
        divs[i].onclick = function (e) {
            e.target.className = 'highlight1';
        }
    }
}
/* END TASK 1 */

/* START TASK 2*/
const mes = document.getElementById('message');
function validate() {
    let phoneNum = document.getElementById('name');
    let re = /^\+?3?8?(0\d{9})$/;
    let rightNum = re.exec(phoneNum.value);
    if (!rightNum) {
        mes.textContent = 'Type number does not follow format';
        phoneNum.style.border = '2px solid white';
        mes.style.backgroundColor = 'rgb(250, 226, 196)';
        return false;
    } else if (rightNum) {
        mes.textContent = 'Data was successfully send';
        phoneNum.style.border = '2px solid rgb(231, 255, 206)';
        mes.style.backgroundColor = 'rgb(231, 255, 206)';
        return false;
    }
    phoneNum.preventDefault();
}
/* END TASK 2 */

/* START TASK 3*/
const field = document.getElementById('task3');
const ball = document.getElementById('ball');
field.onclick = function (event) {
    let fieldCoords = this.getBoundingClientRect();
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / two,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / two
    };
    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    } if (ballCoords.left < 0) {
        ballCoords.left = 0;
    } if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    } if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}
const leftCourt = document.getElementById('span1');
const rightCourt = document.getElementById('span2');

leftCourt.onclick = function () {
    let scoreA = document.getElementById('teamA');
    let total = document.getElementById('total');
    let nuum = Number(scoreA.textContent);
    scoreA.textContent = `${++nuum}`;
    total.textContent = 'Team A score!';
    total.style.color = 'blue';
}
rightCourt.onclick = function () {
    let scoreB = document.getElementById('teamB');
    let total = document.getElementById('total');
    let nuum = Number(scoreB.textContent);
    scoreB.textContent = `${++nuum}`
    total.textContent = 'Team B score!';
    total.style.color = 'red';
}
/* END TASK 3 */