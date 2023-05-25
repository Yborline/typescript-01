
type ID = number | string

const userId: ID = 1; 
const postId: ID = "123sd1sf1q2"

type Coords = [number, number];

const coords: Coords = [50.3232, 43.2312];

type reqStatus = "request" | "success" | "error";

const requestStatus: reqStatus = "request"; 

type CellSize = 2 | 4 | 8 | 16;

const cell: CellSize = 4;

type Model = "small" | "normal" | "big" 

const currentModel: Model = "small"

console.log(currentModel,userId , postId , coords , requestStatus , cell)


export {}