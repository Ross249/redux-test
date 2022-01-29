import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route path="/product/:productId" exact element={<ProductDetails />} />
            <Route>404 NOT FOUND</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
