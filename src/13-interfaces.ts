
interface IUser<T> {
    id: T;
}
const mango: IUser<number> = {id:24};
const poly: IUser<string> = { id: "g3h4j5" };


console.log(mango, poly)


interface Tab<T>{
    id: string,
    position: number,
    active: boolean,
    content: T
}
type TSringTab = Tab<string>;
type TArrayTab = Tab<string[]>

const tab1:TSringTab= {
        id: "id-1",
    position: 2,
    active: false,
    content: "Tab data"
}

const tab2:TArrayTab = {
        id: "id-2",
    position: 4,
    active: true,
    content:["Content-1" , "Content-2"]
}

console.log(tab1, tab2)




export {}