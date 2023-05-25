
enum PizzaSize {
    Small = "s",
    Medium = "m",
    Large = "l"
}

enum PizzaS {
    Small ,
    Medium ,
    Large 
}

enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;
      // 2
current = Season.Autumn;

console.log(current, PizzaSize, PizzaS.Small )

export {

}