const total = 10000;
let sum = 0;
let rest = total;
const elements = [
    {
        'id': 1,
        'name': 'apple',
        'price': 100
    },
    {
        'id': 2,
        'name': 'banana',
        'price': 200
    },
    {
        'id': 3,
        'name': 'blackberry',
        'price': 300
    },
    {
        'id': 4,
        'name': 'cherry',
        'price': 400
    },
    {
        'id': 5,
        'name': 'lemon',
        'price': 500
    },
    {
        'id': 6,
        'name': 'kiwi',
        'price': 600
    },
    {
        'id': 7,
        'name': 'mango',
        'price': 700
    },
    {
        'id': 8,
        'name': 'orange',
        'price': 800
    },
    {
        'id': 9,
        'name': 'pineapple',
        'price': 900
    },
    {
        'id': 10,
        'name': 'pomelo',
        'price': 1000
    }
    ,
    {
        'id': 11,
        'name': 'watermelon',
        'price': 4900
    }
];

const cart = [];

let getElementHTML = obj => {
    const html = `<div class="element"  draggable="true" 
                    ondragstart="drag(event)"
                     id="`+obj.id+`">
            <div class="name">`+ obj.name+`</div>
            <div class="price">`+ obj.price+`</div>
        </div>`;
    return html;
}

let addToCart = ev => {
    let id = ev.detail.id
    // console.log(id)
    id = +id;
    let element;
    for (let el of elements){
        if (el.id === id){
            element = el;
            break;
        }
    }
    if (element.price<=rest){
        cart.push(element);
        calculate();
    }

}
let elementsDraw = () => {
    let htmlElements = '';
    for (let el of elements){
        htmlElements += getElementHTML(el);
    }
    const elementsObj = document.getElementById("elements");
    elementsObj.innerHTML = htmlElements;
}

let cartDraw = () => {
    let htmlCart = '';
    for (let el of cart){
        htmlCart += getElementHTML(el);
    }
    const cartObj = document.getElementById("cart");
    cartObj.innerHTML = htmlCart;
}

let calculate = () => {
    sum = 0;
    for (let el of cart){
        sum += el.price;
    }
    rest = total-sum;
    setValuesHtml();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}
function drop(ev) {
    ev.preventDefault();
    let id = ev.dataTransfer.getData("id");
    document.getElementById("cart").dispatchEvent(new CustomEvent('addToCart', {
        detail: {
            id: id
        }
    }));
    document.getElementById("cart").addEventListener('addToCart', addToCart, event);
    //addToCart(id);
    cartDraw();
}

let setHtml = (id, value) => {
    const element = document.getElementById(id);
    element.innerHTML = value;
}
let setValuesHtml = () => {
    setHtml("sum", sum);
    setHtml("rest", rest);
    setHtml("total", total);
}
window.onload = ()=>{
    elementsDraw();
    cartDraw();
    setValuesHtml();

}

