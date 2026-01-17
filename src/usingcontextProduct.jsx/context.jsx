// import { createContext, useState } from "react";

// export const ProductContext = createContext();

// export default function ProductProvider({ children }) {
//   const initial = {
//     id: "",
//     pname: "",
//     price: "",
//     des: "",
//     img: "",
//   };

//   const [formdata, setFormdata] = useState(initial);
//   const [data, setData] = useState([]);

//   return (
//     <ProductContext.Provider value={{data,setData,formdata,setFormdata,initial}} >
//       {children}
//     </ProductContext.Provider>
//   );
// }
