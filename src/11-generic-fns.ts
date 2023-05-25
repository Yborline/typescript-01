// Думаай о Дженериках как о аргументе, в котором ты указываешь тип других аргументов
    
// const revers = <T>(array: T[]):T[] => {
//     return [...array].reverse();
// }
    
const revers = <T>(array: T[]) => {
    return [...array].reverse();
}

// console.log(revers<number>([1, 2, 3, 4, 5, 6]));
console.log(revers([1, 2, 3, 4, 5, 6]));
console.log(revers(["Mango","Poly" ,"Kiwi" ,"Ajax"]));
console.log(revers([{ a: 1 }, { b: 2 }, { c: 3 }]));



const isEqual = <T, Y>(a :T, b:Y) => {
    return Object.is(a,b)
}
console.log(isEqual(3, 3));
// console.log(isEqual<number, number>(3, 3));
console.log(isEqual(3, "3"))
// console.log(isEqual<number,string>(3,"3"))



// function add<T, Y>(a:T, b:Y) {
    
// }

const mekeArray =<T,Y> (a:T, b:Y) => {
    return [a, b];
}

console.log(mekeArray(2, "3"));
console.log(mekeArray("Mango", "Poly"))
console.log(mekeArray(5, true))
// ошибка
// console.log(mekeArray<boolean, number>( 5, true))


const foo = <N ,A>(mult: N, ...rest:A[]) => {
    

}

console.log(foo(2, [1, 2, 3]));
console.log(foo(2, [1, 2, true]));
console.log(foo("2", ["1", "2", "3"]));


export {    }