import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateForm, ProductList } from "../products";
import App1 from "../from3";
import { CreateContext, Product } from "../usingcontextProduct.jsx";
//import { CreateContext, Product, ProductContext } from "../usingcontextProduct.jsx";


export default function Router() {
return(
    <>
    <BrowserRouter>
        <Routes>
             <Route path="/"  element={<Product/>}/>
              <Route path="/createC" element={<CreateContext/>}/>
             {/* 
              <Route path="/" element={<ProductList />} />
              <Route path="/create" element={<CreateForm />} /> */}
           
        </Routes>
    </BrowserRouter>
    </>
)
}