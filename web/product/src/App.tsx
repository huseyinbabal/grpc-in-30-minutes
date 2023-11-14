import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {product} from "./dist/product/product";
import ProductServiceClient = product.ProductServiceClient;
import ProductRequest = product.ProductRequest;

function App() {

  const [product, setProduct] = React.useState(false);

  useEffect(() => {
    const productClient = new ProductServiceClient("http://localhost:8084", {}, {})
    const productRequest = new ProductRequest({
      id: 1
    })
    productClient.GetProduct(productRequest, {}, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        // @ts-ignore
        setProduct(res.toObject())
      }
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

             {product && <div>
                <p><b>ID:</b> {product.id}</p>
                <p><b>Name:</b> {product.name}</p>
                <p><b>Description:</b> {product.description}</p>
                <p><b>Price:</b> {product.price}</p>
             </div>}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
