// TODO: What does 'this' refer to?
//This will log the browser stuff
console.log(this);

// TODO: What does 'this' refer to?
//its reffering to a variable that doesn't exist
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
//it will log the age which is 10 and add 10
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
//this will log the initialInvestment which is 5000 and * that by 1.15
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
