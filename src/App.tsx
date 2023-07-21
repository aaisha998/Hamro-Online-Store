import "./App.css";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { NavBar } from "./components/NavBar";
import { queryClient } from "./queryClient";
import { NavBar } from "./components/NavBar";
// import { HomePage } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      online store
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="*" element="Error" />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
// {<QueryClientProvider client={queryClient}>
//         {/* <ReactQueryDevtools /> */}
//         <NavBar />

//         <Routes>
//           {/* <Route path="/" element={<HomePage />}></Route> */}

//           <Route path="*" element={"Error"}></Route>
//         </Routes>
//       </QueryClientProvider>}
