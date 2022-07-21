import { CategoryType } from '../../../../types/types';
import './category.css'

type CategoryProps = {
  category: CategoryType;
};

function Category({category} : CategoryProps) : JSX.Element {
  return (
    <div className="category">
      <p>{category.series}</p>
      <div className="category-name">
        <p>{category.name}<span>{category.count}</span></p>
      </div>
    </div>
  );
}

export default Category;
