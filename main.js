menu_list_array_veg = ["Veg Margherita Pizza",
                   "Veg Macaroni Pizza",
                   "Paneer Tandori Pizza",
                   "Peppy Paneer Pizza",
                   "Farm house Pizza",
                   "Mexican Green Wave",
                   "Deluxe Veggie",
                   "Veg Extravaganza",
                   "CHEESE N CORN",
                   "PANEER MAKHANI",
                   "VEGGIE PARADISE",
                   "FRESH VEGGIE",
                   "Indi Tandoori Paneer",
                   ];
menu_list_array_non_veg = ["PEPPER BARBECUE CHICKEN",
                           "CHICKEN SAUSAGE",
                           "Chicken Golden Delight",
                           "Non Veg Supreme",
                           "Chicken Dominator",
                           "PEPPER BARBECUE & ONION",
                           "CHICKEN FIESTA",
                           "Indi Chicken Tikka",
                        ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array_veg.sort();
for(var i=0;i<menu_list_array_veg.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array_veg[i] + '</li>'
}
  htmldata=htmldata+"</ol>"
  document.getElementById("display_menu").innerHTML = htmldata;
}

function get_menu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array_non_veg.sort();
    for(var i=0;i<menu_list_array_non_veg.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array_non_veg[i] + '</li>'
    }
      htmldata=htmldata+"</ol>"
      document.getElementById("display_menu").innerHTML = htmldata;
    }
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array_veg.sort();
htmldata= "<section class='cards'>"
for(var i=0;i<menu_list_array_veg.length;i++){

    htmldata=htmldata+'<div class="card">'
         +'<img src="images/pizzaImg.png">'
          +menu_list_array_veg[i] + '</div>'
}
htmldata= htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_item_1(){
    var htmldata;
    var item=document.getElementById("add_item_1").value;
    menu_list_array_non_veg.sort();
    htmldata= "<section class='cards'>"
    for(var i=0;i<menu_list_array_non_veg.length;i++){
    
        htmldata=htmldata+'<div class="card">'
             +'<img src="images/pizzaImg.png">'
              +menu_list_array_non_veg[i] + '</div>'
    }
    htmldata= htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
    }

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array_veg.push(item);
add_item();
}

function add_top_1(){
    var item=document.getElementById("add_item_1").value;
    menu_list_array_non_veg.push(item);
    add_item_1();
    }