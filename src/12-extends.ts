interface ILength {
    length: number
}


// const logLength = <T extends{length: number}>(arg: T) => {
//     console.log(arg.length);
// }

const logLength = <T extends ILength>(arg: T) => {
    console.log(arg.length);
}


console.log(logLength([1, 2, 3, 4, 5]));
console.log(logLength("qwerty"));
// ошибка
// console.log(logLength(5));



interface IPerson {
    firstName: string;
    lastName: string
}

const addFullName =<P extends IPerson > (person:P) => {
    return {
        ...person,
        fullName: `${person.firstName} ${person.lastName}`,
    };
};

console.log(
    addFullName({
    firstName: "Mango",
        lastName: "Doge"
    }))
    
    console.log(
    addFullName({
    firstName: "Mango",
        lastName: "Doge",
        age: 2,
    }))

export {}