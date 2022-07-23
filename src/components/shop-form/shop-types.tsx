import { ShopType } from "../../types/types";

type ShopTypesProps = {
  types: Array<ShopType>;
};

function ShopTypes({types} : ShopTypesProps) : JSX.Element {
  return (
    <>{
      types.map(type => <option value={type.id} key={type.id}>{type.type}</option>)
    }</>
  );
}

export default ShopTypes;
