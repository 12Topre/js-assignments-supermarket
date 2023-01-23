let x = "";
const myObj = {
    Items: [{ name: "Towels", Quantity: "20", Price: "$3.00" },
    { name: "Milk", Quantity: "2", Price: "$2.00" },
    { name: "Tissues", Quantity: "11", Price: "$1.00" },
    { name: "Juice", Quantity: "6", Price: "$3.50" },
    { name: "Utensils", Quantity: "12", Price: "$3.00" },
    { name: "Cookies", Quantity: "10", Price: "$2.50" },
    { name: "Bread", Quantity: "22", Price: "$3.00" }
    ],

    totalQuantity: "83",
    totalValue: "$18.00"
}

x += "<h4>Items Quantity Price</h4>";
for (let i in myObj.Items) {
    x += myObj.Items[i].name + " " + myObj.Items[i].Quantity + " " + myObj.Items[i].Price + "<br>";
}
x += "<br>"
x += "totalQuantity" + " " + myObj.totalQuantity + "<br>";
x += "totalValue" + " " + myObj.totalValue + "<br>";
document.getElementById("enter").innerHTML = x;