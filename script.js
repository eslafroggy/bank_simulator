$(document).ready(function(){
  var checking = 100000;
  var savings = 230000;

  var withdrawChecking = function(amount) {
	  var deficit = amount - checking;
		if (amount > checking) { 
			if (deficit <= savings)  {
		    withdrawChecking(checking);
		    withdrawSavings(deficit);
		  } 
	  } else {
		  checking = checking - amount;
	  }  
  };
   
  var withdrawSavings = function(amount) {
	  if (savings >= amount) {
		  savings = savings - amount;
		}
  };
  
  var depositChecking = function(amount) {
	  checking = checking + amount;
  };
  
  var depositSavings = function(amount) {
	  savings = savings + amount;
  };
  
  var updateChecking = function() {
	  $("#checking_balance").text(checking/100);
  };

  var updateSavings = function() {
	  $("#savings_balance").text(savings/100);
  };

  $("#checking_form .button_deposit").on("click", function(event){
	  event.preventDefault();
    var value = parseInt($("#checking_form .deposit").val(), 10) * 100;
    depositChecking(value);
    updateChecking();   	
  });
  
  $("#checking_form .button_withdrawal").on("click", function(event){
	  event.preventDefault();
    var value = parseInt($("#checking_form .withdrawal").val(), 10) * 100;
    withdrawChecking(value);
    updateChecking();
    updateSavings();   	
  }); 

  $("#savings_form .button_deposit").on("click", function(event){
	  event.preventDefault();
    var value = parseInt($("#savings_form .deposit").val(), 10) * 100;
    depositSavings(value);
    updateSavings();   	
  });

  $("#savings_form .button_withdrawal").on("click", function(event){
	  event.preventDefault();
    var value = parseInt($("#savings_form .withdrawal").val(), 10) * 100;
    withdrawSavings(value);
    updateSavings();   	
  });




	updateChecking();
	updateSavings();
});
