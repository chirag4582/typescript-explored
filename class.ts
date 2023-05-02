import { employees } from './interface';


class Employee  {
    id: number;
    name :string;

    constructor(id: number,
        name :string){
            this.id = id,
            this.name = name;
        }
    
    getIdwithName():string{
        return this.id.toString()+' '+ this.name 
    }
    
} 

let john = new Employee(1,'John');

let stuff = john.getIdwithName()
// john.id = 1;
// john.name = 'John'

console.log(stuff)

class manager extends Employee {
    constructor(id:number,name:string){
        super(id,name)
    }
}