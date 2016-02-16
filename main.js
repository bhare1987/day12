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

function convertToUl(array){
  var html = "<ul>";
  array.forEach(function(el){
    html += "<li>" + el.title + ": " + "$" + el.price + "</li>";
  });
  html += "</ul>";
  return html;
}

insertContent("#answer2", convertToUl(q2List));


//question 3
