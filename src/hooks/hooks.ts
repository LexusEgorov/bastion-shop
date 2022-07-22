import { useDispatch } from "react-redux";
import { AppDispatchType } from "../types/types";

const useAppDispatch = () => useDispatch<AppDispatchType>();

export {useAppDispatch};
