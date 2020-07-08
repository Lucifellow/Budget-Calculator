
let transaction={};
let totalBalance = 0.00;
let income= 0.00;
let expense = 0.00;
let totalIncome = 0.00;
let totalExpense = 0.00;
let transactionArray=[];

window.onload=function(){
	
	
	if(sessionStorage.getItem("expense")===null){
		sessionStorage.setItem("expense",totalExpense);
		sessionStorage.setItem("income",totalIncome);
		sessionStorage.setItem("totalBalance",totalBalance);
	}else{
	
		totalBalance= parseFloat(sessionStorage.getItem("totalBalance"));
		income=parseFloat(sessionStorage.getItem("income"));
		expense=parseFloat(sessionStorage.getItem("expense"));
	}
	document.getElementById("value").innerHTML = "$ " + totalBalance;
	document.getElementById("income").innerHTML= "$ "+ income;
	document.getElementById("expense").innerHTML= "$ "+ expense;
	
	
}


function buttonClicked(){
	transaction ={
		name:document.getElementById("name").value,
		amount:parseFloat((document.getElementById("amount").value)).toFixed(2)
	};
	
	document.getElementById("name").value="";
	document.getElementById("amount").value="";
	
	if(transaction.name.length==0 || isNaN(transaction.amount)){
		alert("Please enter name and amount of transaction");
	}
	if(parseInt(transaction.amount)>0 && !isNaN(transaction.amount)){
		
		income = parseFloat(transaction.amount);
		income=parseFloat(income.toFixed(2));
		totalIncome +=income;
		document.getElementById("income").innerHTML= "$ "+parseFloat(totalIncome.toFixed(2));
		totalBalance+=income;
		totalBalance= parseFloat(totalBalance.toFixed(2));
		document.getElementById("value").innerHTML = "$ " + totalBalance;
		sessionStorage.setItem("totalBalance",totalBalance);
		sessionStorage.setItem("income",totalIncome);
		
	}else if(!isNaN(transaction.amount)){
		expense = parseFloat(transaction.amount);
		expense = parseFloat(expense.toFixed(2));
		totalExpense += expense; 
		document.getElementById("expense").innerHTML= "$ "+ Math.abs(parseFloat(totalExpense).toFixed(2));
		totalBalance+=expense;
		totalBalance= parseFloat(totalBalance.toFixed(2));
		document.getElementById("value").innerHTML = "$ " + totalBalance;
		sessionStorage.setItem("expense",totalExpense);
		sessionStorage.setItem("totalBalance",totalBalance);
	}
	
	if(!isNaN(transaction.amount)){
		transactionArray.push(transaction);
		let div =document.createElement('div');
		div.id="history-element";
		div.innerHTML = transactionArray[transactionArray.length-1]["name"]
		+"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; $ &nbsp;" +
		transactionArray[transactionArray.length-1]["amount"];
		document.getElementById("history-container").appendChild(div);
	}
}



