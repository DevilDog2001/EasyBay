var x = document.getElementById("Cart")

var y = document.getElementById("plant1")

var z = document.getElementById("alert")

function alertz(){
    alert("Your cart is empty")
}

function secondPhoto1(){
    y.src = "./images/assets/succulents-2.jpg"
}

function secondPhoto2(){
    y.src = "./images/assets/succulents-1.jpg"
}

function accepted(){
    z.remove()
}