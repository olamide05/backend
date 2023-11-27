 var readlineSync = require('readline-sync');
var tvlist = require('./tv.json');
var question = readlineSync.question("hello would you like to buy a tv? ")

class cart {
    constructor (tv){
    this.tv= tvlist
        
    }
    //loadtvdata(tv){
     //   const data = tvlist.readFileSync(tv)
     //   return JSON.parse(data)
    //}

   showTV(){

    console.log(123)
      if (question.toUpperCase() === "YES"){
        var text2 = ""// this sets a variable called text as empty as it will change later in the program
        var i; // this sets a variable that we can use as a starting point
        for (i = 0; i < tvlist.length; i++) {
            
            text2 = "Item No: " + (i +1) + " is: " + 
            " Brand: " + tvlist[i].brand +
            " Model: " +tvlist[i].model  +
            " size in inches : " +tvlist[i].size +
            " Cost: $" + tvlist[i].price 
            
            + "\n"; // this line sets the value of the text for each variable.
            console.log(text2) // this line console logs the answer 
          }
          
        
      } else{
        var whatElse = readlineSync.question("how else can we help u? you can write ur comment we will get back to you ")
      }
       if (question.toUpperCase() === "YES"){
        this.payment()
       }


   }
     payment(){
     var delivery = readlineSync.question("choose one item between 1-4? just choose a number ")
     var totalprice = parseInt(tvlist[delivery].price + 5)
         console.log( "the price for your item is $" + tvlist[delivery].price)
         console.log("the total price is $" + totalprice)


     }

}
//made a mistake of making the c in cart upper case so it could not recoginse the class 
var shoppingCart = new cart();
shoppingCart.showTV();