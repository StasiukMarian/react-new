class User {
    name: string;
    age: number;
    gender: string;


    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

}
/*  inc age  */
function incAge (user:User ,inc:number ): object{
    user.age++
    return user
}

const user = new User("Max",18, "male");
incAge(user, user.age)
console.log(user)

const sum = (a:number,b:number):number=>{return a + b ;}
console.log(sum(2, 3));
