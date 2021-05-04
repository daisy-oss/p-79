var pizza=["Peppy paneer","Veggie"];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    pizza.sort();
    for(var i=0;i<pizza.length;i++){
        htmldata=htmldata+'<li>'+pizza[i]+'<li>'
    }
    htmldata=htmldata+"</ol>"

    document.getElementById("display_menu").innerHTML=htmldata;

}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    pizza.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<pizza.length;i++){
        htmldata=htmldata+'<div class="card">'+'<img src="images/pizzaImg.png"/>' + pizza[i] + '</div>'

    }htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML=htmldata;
}
function add_top(){
    var item=document.getElementById("add_item").value;
    pizza.push(item);
    add_item();
}