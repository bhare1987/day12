//general functions
function insertContent(selector, content) {
  var element = document.querySelectorAll(selector)[0];
    if (typeof content === "string") {
      element.innerHTML = content;
    } else {
      element.appendChild(content);
    }
    return element;
}

function convertHTML(content, tag) {
  var html = document.createElement(tag);
      html.textContent = content;
      return html;
}

//question 1

var priceList = items.map(function(el){
  return el.price;
});

function average(array){
  var sum = 0,
      avg = 0;
  array.forEach(function(el){
    sum += el;
  });
  return avg = (sum / array.length).toFixed(2);
}

insertContent("#answer1", convertHTML(average(priceList), "p"));

//question 2
var q2List = items.filter(function(el){
  return el.price >= 14 && el.price <= 18;
});

function convertToUl(array, iteratorContent){
  var html = "<ul>";
  array.forEach(function(el){
    html += "<li>" + el.title + ": " + "$" + el.price + "</li>";
  });
  html += "</ul>";
  return html;
}

insertContent("#answer2", convertToUl(q2List));


//question 3

var gbp = items.map(function(el){
  return {
    currency_code: el.currency_code,
    title: el.title,
    price: el.price
  }
}).filter(function(el){
  return el.currency_code === "GBP";
});

insertContent("#answer3", convertHTML(gbp[0].title + " " + gbp[0].price + gbp[0].currency_code, "p"));

//question 4

var woodList = items.filter(function(el){
    return el.materials.indexOf("wood") !== -1;
});

function convertWoodList(array){
  var html = "<ul>";
  array.forEach(function(el){
    html += "<li>" + el.title + "</li>"
  });
  html += "</ul>";
  return html;
}

insertContent("#answer4", convertWoodList(woodList));

//question 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var materialsList = items.map(function(el){
  return {
      title: el.title,
      materials: el.materials
  }
}).filter(function(el){
  return el.materials.length >= 8;
});

function convertMaterialsList(array) {
  var html = "";
  array.forEach(function(el){
    html += "<h4>" + "Product: "+ el.title + "</h4>";
    html += "<h4>" + "# of Materials: " + el.materials.length + "</h4>";
    html += "<ul>";
    el.materials.forEach(function(el){
      html += "<li>" + el + "</li>";
    });
    html += "</ul>";
  });
  return html;
};

insertContent("#answer5", convertMaterialsList(materialsList));

//question 6


var whoMade = items.filter(function(el){
  return el.who_made === "i_did";
}).length;

insertContent("#answer6", convertHTML(whoMade, "p"));
