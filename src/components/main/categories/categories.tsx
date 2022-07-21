import Category from './category/category';
import './styles/categories.css';
import { CATEGORIES } from '../../../fish/fish';

function Categories() : JSX.Element {
  return (
    <div className="categories">
      <div className="categories-header">
        <div className="left-column">
          <img src="images/icons/categories.svg" alt="" width={14} height={14}/>
          <h3>Категории</h3>
        </div>
        <div className="right-column">
          <img src="images/icons/filter-toggler.svg" alt="" width={14} height={14}/>
        </div>
      </div>
      <div className="categories-list">
        {
          CATEGORIES.map((category) => <Category category={category} key={category.id}/>)
        }
        <div className="show-more">
          <span>Показать все</span>
          <img src="images/icons/show-more.svg" alt="" width={10} height={10}/>
        </div>
      </div>
    </div>
  );
}

export default Categories;
