

const temps: (number | string | boolean)[] = [30, 31, 27, 28, 32, "qweq" , "ssss" , false] ;

// const num:  Array<number> = [30, 31, 27, 28, 32];

const num: readonly number[] = [30, 31, 27, 28, 32,];
const string: readonly string[]= ["sss",'sddd','sssd']
// const num:  ReadonlyArray<number> = [30, 31, 27, 28, 32];

// num.push(3)
// num.push(2)
temps.push(1)
const coords: [number, number , string] = [50.3413, 30.4433 , "text"];
const rgb: [number, number, number] = [255, 0, 100];

// const arrA: number[] = [1, 2, 3, 4, 5];
// const arrB = [...arrA]

console.log(temps, num , coords, rgb ,string);

export { }