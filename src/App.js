import './App.css';
import Product from './components/Product/Product';
import product from './product.json'

function App() {
  return (
    <div className="clinique_app">
      <Product product={product} />
    </div>
  );
}

export default App;
