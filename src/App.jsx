import { useState } from 'react'
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
import ProductProvider from './usingcontextProduct.jsx/context'
// import ProductProvider from './usingcontextProduct.jsx/context'

function App() {
  const arr= [];

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
    <>
  
      {/* <Form /> */}
      {/* <MovingDot />  */}

     {/* <Array /> */}
     {/* <Formarray /> */}
     {/* <App1 /> */}
     {/* <New /> */}
    <ProductProvider>
      <Router/>
    </ProductProvider>

     

    </>
  )
}

export default App
