import Card from "../card/card";
import Standart from "../standart/standart";
import './shop-list.css';

function ShopList() : JSX.Element{
  return (
    <div className="shop-list">
      <div className="list-header">
        <Standart />
      </div>
      <div className="cards-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default ShopList;