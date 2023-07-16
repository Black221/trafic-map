import {useContext} from "react";
import {AppState} from "../contexts/contextProvider";


const useAppState = () => {
    return  useContext(AppState)
}

export default useAppState;