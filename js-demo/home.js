/*
Calls another function
*/
//single line comment
//declaring variables
const taxRate = 0.16; //constant
let total = 149.99; //number
let product = 'Hiking Boots'; //string
let discounted = true; //boolean
let message = `Total is ${total}`;
//objects
let person = {
    firstName: 'John',
    lastName: 'Adams'
};
(discounted) ? showMessage(discounted): showMessage(total);
//for loop
for (let i = 0; i < 3; i++) {
    console.log(i);
}
//while loop
let count = 1;
while (count < 5) {
    console.log(count);
    count++;
}

changePercentOff(40);

let p = {
    firstName: 'John',
    age: 32,
    showInfo: function(age) {
        showMessage(this.firstName + " " + age);
    }
};

p.showInfo(p.age);

let now = new Date();
showMessage(now.toDateString());

showMessage(Math.abs(-42));

const header = document.getElementById('message');
header.style.fontWeight = '100';
const btn = document.getElementById('see-review');
btn.addEventListener('click', function() {
    const review = document.getElementById('review');
    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        btn.textContent = 'Close review';
    } else {
        review.classList.add('d-none');
        btn.textContent = 'See review';
    }
});

const values = ['a', 'b', 'c'];
console.log(values);
const newValues = values.slice(0, 2);
console.log(newValues);
values.splice(1, 1, 'foo');
console.log(values);
const set = values.filter(function(item) {
    return item > 'b';
});
console.log(set);