
type ID = number | string ;

const userId: ID = "1"; 
const postId: ID = "123sd1sf1q2"

type Coords = [number, number];

const coords: Coords = [50.3232, 43.2312];

type reqStatus = "request" | "success" | "error";

const requestStatus: reqStatus = "request"; 

type CellSize = 2 | 4 | 8 | 16;

const cell: CellSize = 4;


console.log(userId , postId , coords , requestStatus , cell)


export {}