import { useAppDispatch } from "../../../hooks/hooks";
import { Action } from "../../../store/action";

type StandartProps = {
  standart: {
    id: number,
    name: string;
    isActive: boolean;
  }
}

function Standart({standart} : StandartProps) : JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <span className={`standart ${standart.isActive ? 'active' : ''}`}
      onClick={() => {
        dispatch(Action.STANDART.CHECK({id: standart.id}));
      }}
    >{standart.name}</span>
  );
}

export default Standart;
