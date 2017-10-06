//requiring the mysql and inquirer packages//
var mysql = require("mysql");
var inquirer = require("inquirer");
//=====================================================================================================
//connection info//
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Starfire926!",
  database: "bamazon"
});
//Initalizing connection. If successful, logs "Welcome to Bamazon!" and starts the app
connection.connect(function(err) {
  if (err) throw err;
  console.log("Welcome to Bamazon!");
  start();
});

//App starts by connecting to mySQL table called "products" and displaying all the items available along with their id# and price
function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    for (var i = 0; i < res.length; i++){
    console.log("Item ID: " + res[i].item_id + " | Item: " + res[i].product_name + " | Price: " + "$" + res[i].price + " | ");
    console.log("============================================================================================================")
	}
//Inquirer asks the customer to enter the id of the item they wish to buy and the quantity they'd like to buy (both must be numbers)	
	inquirer.prompt([
		{
			type: "input",
			name: "product_id",
			message: "Please enter the item ID number for the product you'd like to purchase",
			validate: function(value) {
	       if (isNaN(value) === false) {
	          return true;
	        }
	          return "Please enter a number";

	      }
		},
		{
			type: "input",
			name: "quantity",
			message: "Please enter the quantity you'd like purchase",
			validate: function(value) {
	       if (isNaN(value) === false) {
	          return true;
	        }
	          return "Please enter a number";
	      }
		}
// After the customer enters their info, the database gets updated to reflect the change in stock quantity. Cost calculated from mySQL price info. 		
	]).then(function(user) {
			
			var chosenItem = parseInt(user.product_id);
			var qtyBought = parseInt(user.quantity);
			var productInfo = res[0];
						
  		if (qtyBought <= productInfo.stock_quantity) {
					console.log("Your item is in stock!");
					console.log("You bought " + qtyBought + " of the item");
					//variable for the mySQL query 
					var newStockQty = "UPDATE products SET stock_quantity = " + (productInfo.stock_quantity - qtyBought) + " WHERE item_id = " + chosenItem;
					
					// Updating inventory in mySQL
					connection.query(newStockQty, function(err, res) {
						if (err) throw err;
					// Calculating total cost (not working yet)
						
						console.log("Your order has been submitted. Your total is $" + productInfo.price * qtyBought);
						console.log(productInfo);
						console.log("Thank you!");
												
					});
					} else {
					console.log("Sorry, there's not enough of this item in stock. Please try a lesser quantity");
					
			}


   		//end database connection
			connection.end();
			
			

	})
	
  
  });
  
}