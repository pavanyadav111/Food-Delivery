import React, { useEffect } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useContext } from "react";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, cate, setCate,showcart, setShowCart } = useContext(dataContext);
  useEffect(() => {
    let newlist = food_items.filter((item) =>item.food_name.includes(input)|| item.food_name.toLowerCase().includes(input)
    );

    setCate(newlist);
  }, [input]);
  let items=useSelector(state=>state.cart)
  return (
    <div className="w-full h-[100px] flex justify-between items-center  px-8 md:px-8 ">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center border-rounded-md shadow-lg">
        <IoFastFoodSharp className="w-[30px] h-[30px] text-green-500" />
      </div>

      <form
        action=""
        className="w-[45%] h-[60px] bg-white flex items-center px-5 rounded-md shadow-md gap-4  md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="text-green-500 w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search items"
          className="w-[100%] outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center border-rounded-md shadow-lg relative "
      onClick={()=>{
        setShowCart(true)
      }}>
        <span className="absolute top-0 right-2 text-green-500 font-bold text-xl">
          {items.length}
          
        </span>
        <RiShoppingBag4Line className="w-[30px] h-[30px] text-green-500  cursor-pointer" />
      </div>
    </div>
  );
}

export default Nav;
