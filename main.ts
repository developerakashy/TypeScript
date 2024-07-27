export {}

let message = 'Welcome World!'

//varibale declarartion
let x = 10
let y = 20

let sum;
const title = 'TypeScript'

//varibale types
let isBeginner: boolean = true;
let total: number = 0
let name: string = 'Akash'

let sentence: string = `My name is ${name}
I am beginner in TypeScript`

let n: null = null
let u: undefined = undefined

let list1: number[] = [1,2,3,4]
let list2: Array<number> = [10,11,12,13]

let person1 : [string, number] = ['Akash', 21]
person1.splice(0,1, 'Ayush')
person1.push("Akash")

enum Color {Red = 6, Green, Blue}

let c: Color = Color.Green

let randomValue: any = true
randomValue = 'Akash'
randomValue = 12

let myVariable: unknown = 35

function hasName(obj: any): obj is {name: string}{
    return !!obj && typeof obj === 'object' && "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name)
}

(myVariable as string).toUpperCase

let a;
a = 10
a = 'aknj'
a = true

let b = true
// b = 'kmwk'

let multitype: number | boolean;
multitype = true
multitype = 23


//functions
function add(num1: number, num2?: number): number{
    if(num2){
        return num1 + num2
    }

    return num1
}

add(5, 10)
add(5)


//interface
interface Person {
    firstName: string,
    lastName?: string
}


function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Akash',
    lastName: 'Yadav'
}

// fullName(p)


//class and access modifiers and inheritance(derived from a class)
class Employee {
    public employeeName: string

    constructor(name: string){
        this.employeeName = name
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('Ayush')
console.log('Employee: ',emp1.employeeName)
emp1.greet()


class Manager extends Employee {
    constructor(managerName: string){
        super(managerName)
    }

    deligateWork(){
        console.log(`Manager delegating Tasks ${this.employeeName}`)
    }
}

let m1 = new Manager('Ankur')
console.log('Manager: ',m1.employeeName)
m1.greet()
m1.deligateWork()
