

interface IParams {
    size: string;
    toppings: string[]
}

interface IPizza{
    size: string;
    // toppings: string[];
    // validateTopping(topping: string): boolean;
    addTopping(topping: string): void;

}

class Pizza implements IPizza {
    static Sizes = 5;
   public size: string;
   private toppings: string[];
     
    constructor({size , toppings = [] }: IParams) {
        this.size = size;
        this.toppings = toppings;

    }
    // constructor(public size:string ,private toppings:string[] ) {
    //     this.size = size;
    //     this.toppings = toppings;
    // }

    private validateTopping(topping: string) {
        console.log(topping);
        

        return true;
    }

    public addTopping(topping: string) {
        console.log(this.validateTopping(topping))
        this.toppings.push(topping)
    }
}

const pizza: IPizza = new Pizza({size:"medium" ,toppings: ["cheese"] });

console.log(pizza);

pizza.addTopping("qweqwe")

// console.log(pizza.toppings)
// pizza.validateTopping("1231")


export {}
