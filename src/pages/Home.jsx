import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";


function Home() {
  let { cate, setCate, input ,showcart , setShowCart} = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  let items=useSelector(state=>state.cart)
  let subtotal = items.reduce((total,item)=>total+item.quantity*item.price,0)
  let deliveryFee=20;
  let taxes=subtotal*0.5/100;
  let total = Math.floor(subtotal+deliveryFee+taxes);

  

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      { input < 0 ? (
        <div className="flex flex-wrap justify-center item-center gap-4 w-[100%]">
          
          {Categories.map((item) => {
            return (
              <div
                className="w-[150px] h-[150px] bg-white flex flex-col items-start gap-4 p-5 justify-start text-[20px] font-bold text-gray-500 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200 "
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null
      }

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-centerpt-8  pb-8 pt-6 ">
        {Categories.length>1 ?
         food_items.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            id={item.id}
            price={item.price}
            type={item.food_type}
          />
        ))
        :
        <div className=" text-center text-2xl text-green-500 font-semibold mt-20">
          No items found
          </div>
        }
       
      </div>

      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6  transition-all duration-500 flex flex-col items-center overflow-auto
        ${showcart?"translate-x-0":"translate-x-full "}`}
      >
        <header className="w-[100%] flex justify-between itmes-center ">
          <span className="text-green-400 text-[18px] font-semibold  cursor-pointer"> Order items</span>
          <span className="h-[30px] w-[20px] text-green-400 text-[18px] font-semibold cursor-pointer " 
          onClick={()=>{setShowCart(false)}}> <RxCross2 /> </span>
        </header>

        
       {items.length>0 ?
        <>

        <div className="w-full mt-9 flex flex-col gap-8">
          {items.map((item)=>{
            return(
             <Card2 
             name={item.name} 
             price={item.price} 
             image={item.image}
              id={item.id} 
              quantity={item.quantity}
               />
         ) })} 
        </div>

        <div className="w-full border-t-2 border-b-2 border-gray-500 mt-6 flex flex-col gap-2 p-8">

         <div className="display flex w-full justify-between items-center">
          <span className="text-lg text-gray-600 font-semibold">Subtotal</span>
          <span className="text-green-500  text-lg font-semibold" >Rs.{subtotal}/-</span>
         </div>

         <div className="display flex w-full justify-between items-center">
          <span className="text-lg text-gray-600 font-semibold">Delivery Fee</span>
          <span className="text-green-500  text-lg font-semibold" >Rs.{deliveryFee}/-</span>
         </div>

         <div className="display flex w-full justify-between items-center">
          <span className="text-lg text-gray-600 font-semibold">Taxes</span>
          <span className="text-green-500  text-lg font-semibold" >Rs.{taxes}/-</span>
         </div>

        </div>
 
        <div className="display flex w-full justify-between items-center p-9">
          <span className="text-2xl text-gray-600 font-semibold">Total</span>
          <span className="text-green-500  text-lg font-semibold" >Rs.{total}/-</span>
         </div>

         <button className="w-[80%] p-3 bg-green-300 rounded-lg text-black hover:text-white hover:bg-green-400  transition-all cursor-pointer "
         onClick={()=>toast.success("Order placed successfully") }
         >Place Order</button>

      </>
      :
      <div className=" text-center text-2xl text-green-500 font-semibold mt-20">
        Your cart is empty
        </div>}
       
      </div>
    </div>
  );
}

export default Home;
