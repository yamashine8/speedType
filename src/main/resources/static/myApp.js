let mainString = "";

function setup() {
    createCanvas(1200, 400);
    restart();
    stringCh();
}

function stringCh() {
    let temp = Math.floor(Math.random() * 7);
    switch (temp) {
        case 0:
            mainString = "стол картина кукла облако автобус поезд бутылка чай чашка блюдо экран комната ковер окно дверь ключ тетрадь ручка мобильник лампа дерево";
            break;
        case 1:
            mainString = "вода земля огонь песок море океан солнце луна звезда дерево куст трава камень воздух снег облако дождь молния ветер туман";
            break;
        case 2:
            mainString = "школа университет библиотека музей театр кино завод фабрика рынок магазин аптека больница офис ресторан кафе парк";
            break;
        case 3:
            mainString = "машина велосипед мотоцикл автобус поезд самолет корабль лодка трактор грузовик трамвай метро рикша мотороллер";
            break;
        case 4:
            mainString = "яблоко груша апельсин банан киви виноград малина клубника вишня черешня абрикос слива гранат дыня арбуз";
            break;
        case 5:
            mainString = "телевизор компьютер ноутбук планшет телефон камера фотоаппарат колонка микрофон наушники мышь клавиатура";
            break;
        case 6:
            mainString = "книга журнал газета брошюра альбом руководство справочник энциклопедия учебник карта грамота сертификат паспорт виза";
            break;
    }
}

let myString = "";
let intKey = 0;
let tempChar;
let x;
let y;
let startT;
let startT1;
let duration;
let seconds;
let resultString = "";
let result;
let stopper = 0;

function draw() {
    background(0);
    translate(200, 60);
    textAlign(LEFT);
    x = 0;
    y = 150;

    for (let i = 0; i < mainString.length; i++) {
        fill(155);
        text(mainString.charAt(i), x, y);
        x += textWidth(mainString.charAt(i));
        if (i > 0 && i % 45 == 0) {
            x = 0;
            y += textAscent() + textDescent();
        }
    }

    x = 0;
    y = 150;
    let minLength = Math.min(myString.length, mainString.length);
    for (let i = 0; i < minLength; i++) {
        if (i < mainString.length && myString.charCodeAt(i) != mainString.charCodeAt(i)) {
            fill("#FF0000");
            text(mainString.charAt(i), x, y);
            x += textWidth(mainString.charAt(i));
        } else {
            fill(255);
            text(mainString.charAt(i), x, y);
            x += textWidth(mainString.charAt(i));
        }
        if (i > 0 && i % 45 == 0) {
            x = 0;
            y += textAscent() + textDescent();
        }
    }
    fill("#0805F7");
    textSize(40);
    text(resultString, 20, 60);
    text("Время выполнения: " + ((millis() - startT1) / 1000.0).toFixed(2) + " секунд", 20, 20);

    if (myString.length >= mainString.length) {
        restart();
    }
}

function restart() {
    startT1 = millis();

    myString = "";
    intKey = 0;
    result = millis() - startT;
    stringCh();
    stopper++;
    if (stopper >= 2) {
        resultString = "последний результат: " + (result / 1000.0).toFixed(2) + " секунд";
    }
    startT = millis();
}

function stringConstructor(intKey, tempChar, myString, key) {

    if (intKey == 8) {
        if (myString != "") {
            myString = myString.substring(0, myString.length - 1);
        }
    } else if (intKey == 32) {
        myString += tempChar;
    } else {
        if (isLetter(key)) {
            myString += tempChar;
        }
    }
    return myString.toLowerCase();
}

function keyPressed() {
    if (myString.length == 0) startT = millis();
    if (key === 'Backspace') {
        if (myString.length > 0) {
            myString = myString.substring(0, myString.length - 1);
        }
    } else if (key === ' ') {
        myString += ' ';
    } else if (isLetter(key)) {
        myString += key;
    }
}

function isLetter(c) {
    return c.match(/[а-я]/i);
}

function keyTyped() {



}

function keyReleased() {

}