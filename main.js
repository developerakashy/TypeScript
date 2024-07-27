"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Welcome World!';
//varibale declarartion
var x = 10;
var y = 20;
var sum;
var title = 'TypeScript';
//varibale types
var isBeginner = true;
var total = 0;
var name = 'Akash';
var sentence = "My name is ".concat(name, "\nI am beginner in TypeScript");
var n = null;
var u = undefined;
var list1 = [1, 2, 3, 4];
var list2 = [10, 11, 12, 13];
var person1 = ['Akash', 21];
person1.splice(0, 1, 'Ayush');
person1.push("Akash");
var Color;
(function (Color) {
    Color[Color["Red"] = 6] = "Red";
    Color[Color["Green"] = 7] = "Green";
    Color[Color["Blue"] = 8] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var randomValue = true;
randomValue = 'Akash';
randomValue = 12;
var myVariable = 35;
function hasName(obj) {
    return !!obj && typeof obj === 'object' && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase;
var a;
a = 10;
a = 'aknj';
a = true;
var b = true;
// b = 'kmwk'
var multitype;
multitype = true;
multitype = 23;
//functions
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Akash',
    lastName: 'Yadav'
};
// fullName(p)
//class and access modifiers and inheritance(derived from a class)
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Ayush');
console.log('Employee: ', emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.deligateWork = function () {
        console.log("Manager delegating Tasks ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Ankur');
console.log('Manager: ', m1.employeeName);
m1.greet();
m1.deligateWork();
