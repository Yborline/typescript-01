

const addExpression = function (x: number, y: number) :number{
    return x + y;
} 

const res = addExpression(5, 6);
// addExpression({}, []);
// addExpression("2", 3)

const addArrow  : AddExpress= (x, y)  => {
    return x + y;
}

addArrow(2, 3)

// 
// 
type AddExpress = (a: number, b: number) => number

const addExpress: IAddFn = function (x, y){
    return x + y;
} 

addExpress(51,2) 

//
// interface 

interface IAddFn {
   ( a: number, b:number ) : number
}

// 

type Fn =  (a:number , b:number , c:number, ...restPatams : number[]) => number

const fn: Fn = (a , b , c, ...restPatams ) => {
    return 5;
}
fn(1, 3, 34, 5, 6)
//
// 
type LogFh = (m: string)=> number | void

const log:LogFh = (message) => {
    console.log(message);
    return  12;

}

log("hello")

//
//
enum PizzaSize {
    Small = "s",
    Medium = "m",
    Large = "l"
}


interface IPizza {
    size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
    toppings: string[];
    // logSize: () => void;
    logSize(): void;
    getSize?(): string;
    addTopping?(topping: string): void;
}

const pizza: IPizza = {
    size: PizzaSize.Small,
    toppings: ["sause", "mushrooms"],
    logSize() {
        console.log(this.size);
    },
    getSize() {
        return this.size;
    },
    addTopping(topping) {
        this.toppings.push(topping);

    }
}

console.log(pizza)
console.log(res)

export { }