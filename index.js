let url = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL';



function convertIT() {
    let input = document.getElementById('qnt');
    let result = document.getElementById('result');
    let total = input.value;

    fetch(url).then((res) => {
            return res.json();
        })
        .then((data) => {

            let rate = data.rates.BRL * total

            result.innerHTML = `${total} USD = ${rate} BRL`;
        })


}