var initialPrice= document.querySelector("#initial-price");
var noOfStocks= document.querySelector("#no-of-stocks");
var currentPrice= document.querySelector("#current-price");
var calculateBtn= document.querySelector("#calculate-btn");
var output= document.querySelector(".output");

calculateBtn.addEventListener("click", function calculateHandler()
    {
        var initialPriceValue= initialPrice.value;
        var noOfStocksValue= noOfStocks.value;
        var currentPriceValue= currentPrice.value;

        console.log(initialPriceValue);

        if(initialPriceValue=="" || noOfStocksValue == "" || currentPriceValue ==""){
            alert("Please fill out all the fields");
        }
        else if(initialPriceValue<0 || noOfStocksValue<0 || currentPriceValue<0){
            alert("No field can be neagtive");
        }
        else if(noOfStocksValue%1!==0){
            alert("Number of stock has to be a whole number");
        }
        else{
            calculate(initialPriceValue, noOfStocksValue, currentPriceValue);
        }
        

    });

function calculate(oldPrice, stockAmount, newPrice) 
{
    var result= (newPrice-oldPrice) *stockAmount;
    var resultPercentage= ((newPrice-oldPrice)/oldPrice)*100;
    if(result>0)
    {
        console.log("To the Moooooooon");
        console.log(`You made a profit of Rs.${result} and your profit percentage is ${Math.round(resultPercentage)}%`);
        output.style.color="rgb(9, 243, 67)";
        output.innerHTML= `To the Moooooooon. You made a profit of Rs.${result} and your profit percentage is ${Math.round(resultPercentage)}%`;
        
    } 
    else if(result<0){
        console.log("Patience is the key to life");
        console.log(`Uh oh! Loss incured of Rs.${Math.abs(result)} and your loss percentage is ${Math.abs(resultPercentage.toFixed(2))}%`);
        output.style.color="rgb(233, 73, 44)";
        output.innerHTML=`Patience is the key to life. Uh oh! Loss incured of Rs.${Math.abs(result)} and your loss percentage is ${Math.abs(resultPercentage.toFixed(2))}%`
    }
    else{
        console.log("This is Charlie- the stock is stationary, over");
        output.style.color="rgb(241, 234, 233)";
        output.innerHTML="This is Charlie- the stock is stationary, over";
    }

}