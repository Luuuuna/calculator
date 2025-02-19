
function upDate() {
    let money = +document.querySelector('.money').value;
    let year = +document.querySelector('.year').value;
    let result = document.querySelector('.result');
    let res = money + money * 0.12 * year;

    result.textContent = res;
}

document.querySelector('.money').addEventListener('input', upDate);

document.querySelector('.year').addEventListener('input', upDate);
