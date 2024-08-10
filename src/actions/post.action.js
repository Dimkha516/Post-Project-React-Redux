// import { type } from "@testing-library/user-event/dist/type";

export const FIRST_MESSAGE = "FIRST_MESSAGE";

export const firstMessage = () => {
    return(dispatch) => {
        const message = "First Message"
        console.log(message);
        dispatch({type: FIRST_MESSAGE, payload: message});
    }    
}