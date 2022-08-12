export const getCardsDB = () => {

    fetch("./assets/js/model/cards.json")
        .then(function (response) {
            console.log('response');
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log('datas');
            console.log(data.cards);
            return data.cards
        })
}
