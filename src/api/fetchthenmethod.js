import { useContext } from "react";
import { ProductContext } from "../App";

export default function Postdata() {

    const { data, setData, formdata, setFormdata, initial } =
            useContext(ProductContext);
    
    fetch( `http://localhost:5000/products`,
        {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
).then((res)=> {
        if(res.ok){
       res.json()
       console.log(res);
        }
       else {
        throw error 
       }
    }).then((res) => {
      return res
    }).catch((error) => {
       console.error(error) 
    })

};

