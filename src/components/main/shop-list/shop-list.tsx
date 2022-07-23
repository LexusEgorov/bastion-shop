import { useAppSelector } from "../../../hooks/hooks";
import Card from "../card/card";
import Standart from "../standart/standart";
import './shop-list.css';

function ShopList() : JSX.Element{
  const standarts = useAppSelector((state) => state.standarts);
  const products = useAppSelector((state) => state.products);

  return (
    <div className="shop-list">
      <div className="list-header">
        {
          standarts.map((standart) => <Standart standart={standart} key={standart.id}/>)
        }     
      </div>
      <div className="cards-list">
        {
          products.map((product) => <Card product={product} key={product.id}/>)
        }
      </div>
    </div>
  );
}

export default ShopList;