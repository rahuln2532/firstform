import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateForm, ProductList } from "../products";
import App1 from "../from3";
import { CreateContext, Product } from "../usingcontextProduct.jsx";
import Navbar from "../navbar.jsx";
import Footer from "../footer.jsx";
import Sidebar from "../sidebar.jsx";
import Layout from "../layout/layout1.jsx";
//import { CreateContext, Product, ProductContext } from "../usingcontextProduct.jsx";


export default function Router() {
    return (
        <>
            <BrowserRouter>
                {/* <Navbar/> */}
                {/* <Sidebar/> */}
                <Routes>
                    
                    <Route path="/" element={
                        <Layout><Product /></Layout>
                    } />
                    <Route path="/createC" element={
                        <Layout><CreateContext/></Layout>} />
                    {/* 
              <Route path="/" element={<ProductList />} />
              <Route path="/create" element={<CreateForm />} /> */}

                </Routes>
                {/* <Footer/> */}
            </BrowserRouter>
        </>
    )
}