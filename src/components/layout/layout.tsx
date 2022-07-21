import Footer from "../footer/footer";
import Header from "../header/header";
import Cart from "../cart/cart";
import Main from "../main/main";
import ShopForm from "../shop-form/shop-form";
import TypeForm from "../type-form/type-form";
import { ShopType } from "../../types/types";

const shopTypes = [
  {id: 1, type: 'aaa'},
  {id: 2, type: 'bbb'}
];

function Layout() : JSX.Element{
  return (
    <div className="Layout">
      <Header />
      <ShopForm types={shopTypes}/>
      <Footer />
    </div>
  );
}

export default Layout;
