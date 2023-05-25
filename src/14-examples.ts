type TAnimationState = "playing" | "paused";
type THttpState = "request" | "success" | "error";

// реализация в виде Фабрики

const makeState = <S>(initialState:S) => {
    let state = initialState;
    const getState = () => {
        return state;
    };
    const setState = (newState: S) => {
        state = newState;
    };
    return {
        getState,
        setState,
     }
}


const animationState = makeState<TAnimationState>("playing");
animationState.setState("paused");

// ошибка
// animationState.setState("request"); 

const httpState = makeState<THttpState>("success");
httpState.setState("request");
// ошибка
// httpState.setState("playing");

console.log(animationState , httpState)



export {}