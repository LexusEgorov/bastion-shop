import Footer from "../footer/footer";
import Header from "../header/header";
import Main from "../main/main";

function Layout() : JSX.Element{
  return (
    <div className="Layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
