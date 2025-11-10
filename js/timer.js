
const blockDays = document.querySelector('.timer__days');
const blockHours = document.querySelector('.timer__hours');
const blockMinutes = document.querySelector('.timer__minutes');
const blockSeconds = document.querySelector('.timer__seconds');

let interval;

const numWord = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNumber = value % 10;
    console.log(lastNumber)

    if (value > 10 && value < 20) {
        return words[2];
    }
    if (lastNumber > 1 && lastNumber < 5) {
        return words[1];
    }
    if (lastNumber === 1) {
        return words[0];
    }
    return words[2];
};

const updateTimer = () => {
    const dateNow = new Date();
    const dateDeadline = new Date('15 november 2025').getTime();
    const timeRemaing = (dateDeadline - dateNow) / 1000;

    const days = Math.floor(timeRemaing / 60 / 60 / 24)
    const hours = Math.floor((timeRemaing / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaing / 60) % 60);
    const seconds = Math.floor(timeRemaing % 60);

    blockDays.textContent = formatTime(days);
    blockHours.textContent = formatTime(hours);
    blockMinutes.textContent = formatTime(minutes);
    blockSeconds.textContent = formatTime(seconds);

    secondsWords = ['секунда', 'сукунды', 'секунд'];
    minutesWords = ['минута', 'минуты', 'минут'];
    hoursWords = ['час', 'часа', 'часов'];
    daysWords = ['день', 'дня', 'дней'];

    blockSeconds.nextElementSibling.textContent = numWord(seconds, secondsWords);
    blockMinutes.nextElementSibling.textContent = numWord(minutes, minutesWords);
    blockHours.nextElementSibling.textContent = numWord(hours, hoursWords);
    blockDays.nextElementSibling.textContent = numWord(days, daysWords);

    if (timeRemaing <= 0) {
        printColorRed();
        clearInterval(interval);
        blockDays.textContent = '00';
        blockHours.textContent = '00';
        blockMinutes.textContent = '00';
        blockSeconds.textContent = '00';
    }

}

function printColorRed() {
    const blockTimer = document.querySelectorAll('.timer__count');

    blockTimer.forEach((e) => {
        e.style.color = 'red';
    });
}

function formatTime(time) {
    return time < 10 ?
        '0' + time :
        time;
}

interval = setInterval(updateTimer, 500);

