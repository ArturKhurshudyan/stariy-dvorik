import React from "react";
import Main from "./pages/main/Main";
import { Provider } from "react-redux";
import { store } from "./redux";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "./Components/header/header";
import Shashlik from "./pages/shashlik/menu-item-shashlik";
import Sup from "./pages/sup/menu-item-sup";
import Salat from "./pages/salat/menu-item-salat";
import MenuItem from "./pages/menu-item-all/menu-item-all";
import "./index.css"
import Karzina from "./pages/karzina/karzina";






function App() {

  

  return (
    
    <Provider store={store}>
      <BrowserRouter>
        
        
        <div className="wrapper">
          <Header />
          <Routes>
            <Route exact="true" path="/" element={<Main/>}>
              <Route exact="true" path="/" element={<MenuItem/>}>
              {" "}
              </Route>
              <Route exact="true" path="shashlik" element={<Shashlik/>}>
              {" "}
              </Route>
              <Route exact="true" path="sup" element={<Sup/>}>
              {" "}
              </Route>
              <Route exact="true" path="salat" element={<Salat/>}>
              {" "}
              </Route>
            </Route>
            <Route exact="true" path="karzina" element={<Karzina/>}/>
          </Routes>
            
            
            
        </div>
        
            
      </BrowserRouter>
          
    </Provider>
      
    
  );
}

export default App;
