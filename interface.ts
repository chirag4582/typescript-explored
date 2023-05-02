interface User {
    name:string;
    age?:number;
    id : number;
    email:string
}

let user : User = {name:'John',id:5,email:'jdnj'}

export interface employees extends User {
      Login(): User;
}