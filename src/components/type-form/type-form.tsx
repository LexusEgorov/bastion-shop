import './type-form.css'

function TypeForm() : JSX.Element {
  return (
    <section className="type-form">
      <div className="wide-container">
        <div className="form-header">
          <h2>Добавление типа товара</h2>
        </div>
        <div className="small-container">
          <form action="">
            <label htmlFor="id">ID</label>
            <input type="number" name="id" id="id" placeholder="Id" required/>
            <label htmlFor="type">Тип</label>
            <input type="text" name="type" id="type" placeholder="Тип" required/>
            <button>Сохранить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TypeForm;
