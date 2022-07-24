import { useAppSelector } from "../../../hooks/hooks";
import Card from "../card/card";
import Standart from "../standart/standart";
import './shop-list.css';

type ShopListProps = {
  minPrice: number;
  maxPrice: number;
}

function ShopList({minPrice, maxPrice} : ShopListProps) : JSX.Element{
  const standarts = useAppSelector((state) => state.standarts);
  const products = useAppSelector((state) => state.products);
  const types = useAppSelector((state) => state.types);
  
  const activeStandarts = standarts.filter((standart) => standart.isActive);
  const activeTypes = types.filter((type) => type.isActive);
  let filteredProducts = products.filter((product) => product.price >= minPrice && product.price <= maxPrice);

  if(activeTypes.length !== 0){
    filteredProducts = filteredProducts.filter((product) => activeTypes.some((type) => type.id === product.typeId));
  }
  
  if(activeStandarts.length !== 0){
    filteredProducts = filteredProducts.filter((product) => activeStandarts.some((standart) => standart.name === product.standart));
  }

  return (
    <div className="shop-list">
      <div className="list-header">
        {
          standarts.map((standart) => <Standart standart={standart} key={standart.id}/>)
        }     
      </div>
      <div className="cards-list">
        {
          filteredProducts.map((product) => <Card product={product} key={product.id}/>)
        }
      </div>
    </div>
  );
}

export default ShopList;