var operand1=0;
var operator=null;
var operand2=null;

var buttons=document.getElementsByClassName('keys');	
var display=document.getElementById('display');

for(var i=0;i<buttons.length;i++){
	display.innerText="";
	buttons[i].addEventListener('click',function(){
		var value=this.getAttribute('data-value');
		if(value=='+'){
			operator='+';
			operand1=parseFloat(display.textContent);
			display.textContent=""+operator;

			console.log(operand1);
		console.log(operator);

		}
		else if(value=="="){
			operand2=parseFloat(display.textContent);
			
			console.log(operand2);
			var result=eval(operand1+operator+operand2);
			console.log(result);
			display.innerText="";
			display.innerText+=result;
		}else if(value=='C'){
			display.innerText="0";
		}
		else if(value=='( )'){
			display.innerText="("+operand2+")";
		}
		else if(value=='%'){
			operator='%';
			operand1=parseFloat(display.textContent);
			console.log(operand1);
			display.innerText=""+operator;
		}
		else if(value=='-'){
			operator='-';
			operand1=parseFloat(display.textContent);
			
			display.innerText=""+operator;
		}
		else if(value=='/'){
			operator='/';
			operand1=parseFloat(display.innerText);
			display.innerText=""+operator;
		}
		else if(value=="*"){
			operator="*";
			operand1=parseFloat(display.innerText);
			display.innerText=""+operator;
		}
		else if(value=='.'){
			operand1="0."+parseFloat(display.innerText);
			display.innerText=""+operand1;
		}
		else{
			display.innerText=value;
		}
	});
}