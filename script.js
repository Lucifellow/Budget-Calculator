
let transaction={};
let totalBalance = 0.00;
let income= 0;
let expense = 0;
let transactionArray=[];

window.onload=function(){
	
	
	if(sessionStorage.getItem("expense")===null){
		sessionStorage.setItem("expense",expense);
		sessionStorage.setItem("income",income);
		sessionStorage.setItem("totalBalance",totalBalance);
	}else{
	
		totalBalance= parseInt(sessionStorage.getItem("totalBalance"));
		income=parseInt(sessionStorage.getItem("income"));
		expense=parseInt(sessionStorage.getItem("expense"));
	}
	document.getElementById("value").innerHTML = "$ " + totalBalance;
	document.getElementById("income").innerHTML= "$ "+ income;
	document.getElementById("expense").innerHTML= "$ "+ expense;
	
	
}


function buttonClicked(){
	transaction ={
		name:document.getElementById("name").value,
		amount:document.getElementById("amount").value
	};
	
	document.getElementById("name").value="";
	document.getElementById("amount").value="";
	
	if(transaction.name.length==0 || transaction.amount.length===0){
		alert("Please enter name and amount of transaction");
	}
	if(parseInt(transaction.amount)>0 && transaction.name.length!==0){
		income += parseInt(transaction.amount);
		document.getElementById("income").innerHTML= "$ "+income;
		totalBalance+=income;
		document.getElementById("value").innerHTML = "$ " + totalBalance;
		sessionStorage.setItem("totalBalance",totalBalance);
		sessionStorage.setItem("income",income);
		
	}else if(transaction.name.length!==0){
		expense += parseInt(transaction.amount);
		document.getElementById("expense").innerHTML= "$ "+ expense;
		totalBalance+=expense;
		document.getElementById("value").innerHTML = "$ " + totalBalance;
		sessionStorage.setItem("expense",expense);
		sessionStorage.setItem("totalBalance",totalBalance);
	}
	transactionArray.push(transaction);
		let div =document.createElement('div');
		div.id="history-element";
		div.innerHTML = transactionArray[transactionArray.length-1]["name"]
		+"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; $ &nbsp;" +
		transactionArray[transactionArray.length-1]["amount"];
		document.getElementById("history-container").appendChild(div);
		
}



