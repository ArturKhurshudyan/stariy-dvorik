
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Component/Header/Header";

function AllRoutes() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route exact path="/" element={<Header />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AllRoutes;
