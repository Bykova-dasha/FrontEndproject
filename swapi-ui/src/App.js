import './App.css';

function App() {
  return (
      <div className="container py-4">
        <h1 className="text-center mb-4">Star Wars Explorer</h1>
        <div className="row mb-4">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Пошук персонажа..." />
          </div>
          <div className="col-md-4">
            <select className="form-select">
              <option>Усі категорії</option>
              <option>Люди</option>
              <option>Планети</option>
              <option>Кораблі</option>
            </select>
          </div>
          <div className="col-md-4 text-end">
            <button className="btn btn-primary">Застосувати фільтри</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Luke Skywalker</h5>
                <p className="card-text">Height: 172</p>
                <p className="card-text">Mass: 77</p>
                <p className="card-text">Gender: Male</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className="page-item disabled"><a className="page-link" href="#">Назад</a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">Далі</a></li>
          </ul>
        </nav>
      </div>
  );
}

export default App;
