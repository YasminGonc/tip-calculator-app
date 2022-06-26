var tip = document.querySelector("form");
var bill = document.querySelector("#pholderbill");
var numpeople = document.querySelector("#pholdernum");

function reset(){
    txtrestip.innerText = `R$ 0.00`;
    txtrestotal.innerText = `R$ 0.00`;
    document.querySelector("#pholderbill").value = '';
    document.querySelector("#pholdernum").value = '';
    document.querySelector("form").reset();
}

tip.addEventListener("submit", function(event){
    var data = new FormData(tip);
    
    if(Number(numpeople.value) == 0){
        txterror.innerText = "Digite valor maior que 0"
    } else{
        for (const entry of data){
            var output = entry[1];
            var outputnum = Number(output);
            var restip = (Number(bill.value) * outputnum * 0.01)/(Number(numpeople.value));
            var restotal = (Number(bill.value)/Number(numpeople.value)) + restip;

            txtrestip.innerText = `R$ ${restip.toFixed(2)}`;
            txtrestotal.innerText = `R$ ${restotal.toFixed(2)}`;
    
        };

    }
    
    event.preventDefault();
}, false);
