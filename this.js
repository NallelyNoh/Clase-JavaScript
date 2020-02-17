////////////////////////////////////////   
const user = {
    name: "Usuario",
    email: "usuario@gmail.com",
    login: function () {
        alert('Hi ${this.name}');
    },
    logout: function() {
        alert('Bye ${this.name}');
    }
};

let Admin = function (name = "usuario", email = "usuario@gmail.com") {
const admin = Object.create(user);
admin.name = name || "Usuario",
admin.email = email,
admin.sales = 5000;
admin.checkSales = function() {
alert(`You sold $${this.sales}`);
};
return admin;
};  


let Customer = function (name = "usuario", email = "usuario@gmail.com") {
const customer = Object.create(user);
customer.name = name || "Usuario",
customer.email = email,
customer.balance = 500,
customer.checkBalance = function () {
    alert(`You have $${this.balance}`);
};
return customer;
};

const a = new Customer("Marco", "marco@gmail.com")
console.log(a)

const d = new Admin("Nallely", "nallely@gmail.com");
console.log(d)


// const a = new Customer("Marco", "marco@gmail.com");

// const b = new Customer();

// const c = new Admin();
// console.log(b.login());


////////////////////////////////////////
var x = {
    prop: 35,
    f: function () {
    return this.prop;
 },
 a: () => {
 return x.prop;
 }
}

console.log(x.f())
console.log(x.a())



/////////////////////////////////////
const array = [];
array.push(3);
console.log(array)


////////////////////////////////////////////////////REVISAR, NO IMPRIME
// const y = Object.create(x);
// y.b = 3;

// const z = 3;

// console.log(y.b);
// console.log(x);


////////////////////////////////////7
// var x = {
//     prop: 35,
//     f: function () {
//     return this.prop;
// },
// a: () => {
// return x.prop;
// }
// }

// x.newProp = {};
// x.newProp.a = 5;
// x.newProp.b = {};
// x.newProp.b.a = {};

// x.arrFunc = () => console.log("hi!");
// x.func = function() {
//     console.log("Hi normal");
// }
// delete x.newprop;

// x.arrFunc();
// x.func();

// console.log(x);


///////////////////////////////
var x = {
    valor1: 35,
    valor2: 50,
    valor3: 20,
    valor4: "Hola",
};


var y = Object.create(x);
y.valor4 = 10;
console.log(Object.keys(x));
console.log(Object.keys(y));


if (!Array.prototype.hasOwnProperty ("adding")) {
Object.defineProperty(Array.prototype, "adding", {
    value: function(){
        return this.reduce((current, x) => current + x, 0)
    }
});
}

const newValues = [3,2,1];
console.log(newValues.adding())


function sumar (arr) {
   return arr.reduce(((current,x) => current + x),0)
}

const valores = Object.keys(x).map((prop) => x[prop])

console.log(sumar(valores));

 
///////MANERAS DE COPIAR UN OBJETO
// var y1 = {...x}
// var y2= x;
// var y3 =  Object.create(x);



/////////////////
var x = {
    valor1: 35,
    valor2: 50,
    valor3: 20,
    valor4: "Hola", 
};

const newArray = Object.keys(x).filter(y => typeof x[y] == "number").map((y) => x[y]);
console.log(newArray);


//////////////////////// NO SALIO LA ALERTA
// const user = {
//     name: "Usuario",
//     email: "usuario@gmail.com",
//     login: function () {
//         alert('Hi ${this.name}');
//     },
//     logout: function() {
//         alert('Bye ${this.name}');
//     }
// };


// let admin = Object.create(user);
// admin.sales = 5000,
// admin.checkSales = function () {
//         alert(`You sold $${this.sales}`);
//     };

// let customer = Object.create(user);
// customer.balance = 500;
// customer.checkBalance = function () {
//     alert(`You have $${this.balance}`);
// };


// console.log(customer.checkBalance());

    /// Otra forma de crear usuario

    // let admin = {
    //     sales: 5000,
    //     checkSales: function () {
    //         alert ('You sold ${this.sales}');
    //     }
    // };
    
    // admin.proto = user;

    
