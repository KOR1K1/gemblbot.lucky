let lastBettingTime = 0; // Переменная для отслеживания последнего времени "betting"
let lastState = 'ending'; // Последнее состояние игры
let randomNumber1 = null; // Сохраненное значение множителя

function getRan(min, max) {
    return Math.random() * (max - min) + min;
}

async function checkSignal() {
    const url = 'https://crash-gateway-cc-cr.gamedev-tech.cc/state?id_n=1play_luckyjet&id_i=1';
    const response = await fetch(url, {
        headers: { Authorization: 'Bearer 2e773cd107fb3947f64498cf2cdd221e' },
    });

    const data = await response.json();
    const state = data.current_state;
    console.log(data);
    
    let loader2_text = document.querySelector('.loader2-text');

    if (state === 'ending') {
        loader2_text.innerHTML = "Waiting";
        lastState = 'ending'; // Запоминаем, что состояние сейчас "ending"
    } else {
        // Если состояние изменилось с "ending" на что-то другое, генерируем новое значение
        if (lastState === 'ending') {
            randomNumber1 = getRan(1.1, 1.3).toFixed(2);
        }
        loader2_text.innerHTML = `${randomNumber1}x`;
        lastState = state; // Запоминаем текущее состояние
    }
}

let intervalId = setInterval(checkSignal, 100);
checkSignal();
