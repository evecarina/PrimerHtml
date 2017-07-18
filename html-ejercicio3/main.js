function convertirCelsius(){
    var records = document.getElementById('records');
    var fare = document.getElementById('fare');
    fare=parseInt(fare.value);
    var resultado = (fare-32)*5/9;
    records.innerHTML = resultado;

}