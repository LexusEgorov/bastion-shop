import { useAppDispatch } from "../../../../hooks/hooks";
import { Action } from "../../../../store/action";

type TypeCheckboxProps = {
  id: number,
  type: string,
  isActive: boolean,
}

function TypeCheckbox({id, type, isActive} : TypeCheckboxProps) : JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="type-checkbox">
      <input type="checkbox" id={`type-checkbox-${id}`} name={`type-checkbox-${id}`} checked={isActive}
        onChange={() => {
          dispatch(Action.TYPE.CHECK({id: id}));
        }}
      />
      <label htmlFor='type-checkbox-1'>{type}</label>
    </div>
  );
}

export default TypeCheckbox;
