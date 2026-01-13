import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateForm, ProductList } from "../products";
import App1 from "../from3";


export default function Router() {
return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/create" element={<CreateForm />} />
        </Routes>
    </BrowserRouter>
    </>
)
}