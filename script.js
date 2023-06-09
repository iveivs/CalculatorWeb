let a = '' // первое число
let b = '' // второе число
let sign = '' // operation
let finish = false
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

// вывоод на экран
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка:
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка АС
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получение нажатой кнопки
    const key = event.target.textContent;

    // если нажата кнопка от 0 до 9 или точка
    if(digit.includes(key)) {
        if(b === '' && sign === '') {
            a+= key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } 
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
        
    }

    // если нажата кнопка "+ - x /"
    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        
        return;
    }

    // нажата =
    if (key === "=") {
        if(b === "") b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                if(b === '0') {
                    out.textContent = 'Error';
                    a = "";
                    b = "";
                    sign = "";
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}   



