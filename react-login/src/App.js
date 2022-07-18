
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn"
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";


const store = configureStore();


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    
   </Provider>
);
  
}

export default App;