import "./App.scss";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Make sure you are using v6 or above
import { queryClient } from "./queryClient";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchPage } from "./SearchPage";
import { ProductPage } from "./components/ProductPage";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/product-detail/:id" element={<ProductPage />}></Route>
            <Route path="*" element="Error" />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;

