var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    displayItems();
    purchase();
});

function displayItems() {
    var query = "SELECT * FROM products;";
    connection.query(query, function(err, res) {
        for (var i=0; i<res.length; i++) {
            console.log(
                "\n----------\n" +
                "Item Name: " + res[i].product_name +
                "\nId: " + res[i].item_id +
                "\nPrice: " + res[i].price +
                "\nStock: " + res[i].stock_quantity +
                "\n----------\n"
            );
        }
    });
};

function purchase() {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "Enter the id for the product you would like to purchase",
                validate: function(value) {
                    if (isNAN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "Enter the quantity that you would like to purchase",
                validate: function(value) {
                    if (isNAN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function(answer) {
            // fill in code for checking if there is enough in stock, prompting user accordingly, and updating db accordingly
        });
};