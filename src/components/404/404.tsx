import { Link } from "react-router-dom";
import './404.css';

function NotFound(){
  return (
    <div className="not-found">
      <h2>Такой страницы нет :(</h2>
      <Link to="/">На главную</Link>
    </div>
  );
}

export default NotFound;
