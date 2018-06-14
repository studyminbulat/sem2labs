const values = [10, 20, 30];
const URLs = [
    "https://kodaktor.ru/api/m/",
    "https://kodaktor.ru/api/MS2/",
    "https://kodaktor.ru/api/MS3/"
];
(async () => {
    let answer = 10;
    for (let i = 0; i < values.length; i++) {
        let r = await fetch(URLs[i] + values[i] + '/' + answer, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
        console.log(r.result);
        answer = r.result;
    }

})();