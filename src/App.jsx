import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './form'
import MovingDot from './pointer'
import Array from './array'
import Formarray from './formArray'
import App1 from './from3'
import Card from './card1'
import New from './form4'
import Router from './router'
import Sidebar from './sidebar'
import Postdata from './api/fetchthenmethod'

//import ProductProvider from './usingcontextProduct.jsx/context'
// import ProductProvider from './usingcontextProduct.jsx/context'

export const ProductContext = createContext();

function App() {

const initial = {
    id: "",
    pname: "",
    price: "",
    des: "",
    img: "",
  };

  const [formdata, setFormdata] = useState(initial);
  const [data, setData] = useState([]);
  const [demo, setDemo] = useState({
    value: "",
    min: "",
    max: "",
  });

  
  // const double=(num)=> {
  //    console.log(num*2);
  // }
  // const arr2 = arr.forEach(double);
  

  // const double=(num)=> {
  //   let num2=num*2;
  //   return num2;
  // }
  // const arr2 = arr.map(double);
  // console.log(arr2);
  

  // const arr2 = arr.find((num)=>num==4);
  // console.log(arr2);

  // const arr2 = arr.findIndex((num)=>num==4);
  // console.log(arr2);

  // const arr2 = arr.includes(3);
  // console.log(arr2);


  // const double=(num)=> {
  //   ///let num2=num*2;
  //   return num%2==0;
  // }
  // const arr2= arr.filter(double)
  // console.log(arr2);

  // const arr2= arr.slice(1,3);
  // console.log(arr2);

  //  const arr2= arr.push();
  
  // // console.log(arr2);
  // console.log(arr);
  return (
    <>    <div >
  
      {/* <Form /> */}
      {/* <MovingDot />  */}

     {/* <Array /> */}
     {/* <Formarray /> */}
     {/* <App1 /> */}
     {/* <New /> */}
    {/* <ProductProvider>
     
    </ProductProvider> */}
      <ProductContext.Provider value={{data,setData,formdata,setFormdata,initial,demo,setDemo}} >
      <Router/>
      {/* <Postdata/> */}
    </ProductContext.Provider>
     

    </div>
    </>

  )
}

export default App
