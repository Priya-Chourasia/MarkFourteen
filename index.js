var initialPrice=document.querySelector("#initial-price");
var stockQuantity=document.querySelector("#stock-quantity");
var currentPrice=document.querySelector("#current-price");
var submitButton= document.querySelector("#submit-btn");
var outputBox=document.querySelector("#output-box");

submitButton.addEventListener('click',submitHandler);

function submitHandler(){
    var ip= Number(initialPrice.value);
    var qty= Number(stockQuantity.value);
    var curr= Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);

}
function calculateProfitAndLoss(initial,quantity,current){
    if (initialPrice.value == ""||stockQuantity.value == ""||currentPrice.value == ""||initialPrice.value == "0"||stockQuantity.value == "0"||currentPrice.value == "0"||initialPrice.value<"0"||stockQuantity.value<"0"||currentPrice.value<"0") {
		validMsg();
    }else{
        if(initial>current){
            var loss= (initial-current)*quantity;
            var lossPercentage= (loss/initial)*100;
            showOutput(`hey loss is ${loss} and loss percentage is ${lossPercentage}`);
        }else if(current>initial){
            var profit= (current-initial)*quantity;
            var profitPercentage= (profit/initial)*100;
            showOutput(`hey profit is ${profit} and profit percentage is ${profitPercentage}`);
        }else{
            showOutput(`No pain, No Gain`);
        }
    }

}

function showOutput(message){

outputBox.innerHTML=message;
}
function validMsg() {
	showOutput("Please Enter Valid Prices");
}