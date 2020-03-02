
   function IncreaseAmount(Amount,AmountID,CounterID)
   {
		
		var txtCounter1 = document.getElementById(CounterID).value;
		var count1= parseInt(txtCounter1);
		count1 = count1+1;
		document.getElementById(CounterID).value = count1;
		
		var AmountNumber = Amount.split('$');
		AmountNumber = AmountNumber[1];
		AmountNumber = parseInt(AmountNumber);
		
		var Multiple = count1*AmountNumber;
		document.getElementById(AmountID).innerHTML = "$"+Multiple;

		TotalAmount();
   }
   
   function DecrementAmount(OrginalAmount,AmountID,CounterID)
   {
		var FirstAmount = OrginalAmount.split('$');
		FirstAmount = FirstAmount[1];
		FirstAmount = parseInt(FirstAmount);
		var Amount = document.getElementById(AmountID).textContent;
		
		var txtCounter1 = document.getElementById(CounterID).value;
		var count1= parseInt(txtCounter1);
		if(count1>1)
		{
			count1 = count1-1;
			document.getElementById(CounterID).value = count1;
		
			var AmountNumber = Amount.split('$');
			AmountNumber = AmountNumber[1];
			AmountNumber = parseInt(AmountNumber);
						
			var DicreaseAmount = AmountNumber/FirstAmount;
			var DueAmount = AmountNumber/DicreaseAmount;
			var DueLastAmount = AmountNumber-DueAmount;
			document.getElementById(AmountID).innerHTML = "$"+DueLastAmount; 
			
			TotalAmount();
		}	
   }
   
   function TotalAmount()
   {
		var Amount1 = document.getElementById('txtAmount1').textContent;
		var Amount2 = document.getElementById('txtAmount2').textContent;

		var TaxAmount = document.getElementById('txtTaxAmount').textContent;
		var TaxNumber = TaxAmount.split('$');
		TaxNumber = TaxNumber[1];
		TaxNumber = parseInt(TaxNumber);
		
		var AmountNumber1 = Amount1.split('$');
		AmountNumber1 = AmountNumber1[1];
		AmountNumber1 = parseInt(AmountNumber1);
		
		var AmountNumber2 = Amount2.split('$');
		AmountNumber2 = AmountNumber2[1];
		AmountNumber2 = parseInt(AmountNumber2);
		
		var TotalSubAmount = AmountNumber1+AmountNumber2;
		var TotalAmount = AmountNumber1+AmountNumber2+TaxNumber;
		
		document.getElementById('txtSubTotalAmount').innerHTML = "$"+TotalSubAmount; 
		document.getElementById('txtTotalAmount').innerHTML = "$"+TotalAmount; 
	}
 