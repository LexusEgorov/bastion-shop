import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatchType, State } from "../types/types";

const useAppDispatch = () => useDispatch<AppDispatchType>();

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export {useAppDispatch, useAppSelector};
