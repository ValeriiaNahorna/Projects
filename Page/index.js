function getDomNodesBySelector(selector) {
    return Array.from(document.querySelectorAll(selector));
}

document.querySelector('.total__button').addEventListener('click', applyDiscount, { once: true });

function applyDiscount() {
    let form = document.querySelector('.input-value');
    let promo = 'промокод';
    if (form.value == promo) {
        let prices = getDomNodesBySelector('.price');
        let result = prices.map(function (item) {
            let num = +item.textContent;
            let discount = num - (num * 0.15);
            return discount;
        });
        let sum = result.reduce((sum, current) => sum + current, 0);
        let i = 0;
        prices.forEach((item) => { item.innerHTML = result[i++] });
        let total = document.querySelector('.total-cost');
        total.innerHTML = sum;
    } else if (form.value !== promo) {
        alert('Введите действующий промокод.')
        return location.reload()
    }

    //console.log(prices);
    //console.log(result);
    //console.log(form.value);
}
