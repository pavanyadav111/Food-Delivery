import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import image1 from "../assets/image1.webp";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";


function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch()
  return (
    <div className="w-[300px] h-[300px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400 cursor-pointer">
      <div className="w-[100%] h-[70%] overflow-hidden">
        <img src={image} alt="img1" className="object-cover rounded-lg " />
      </div>

      <div className="text-xl font-semibold ">{name}</div>

      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">{price}</div>

        <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-bold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}

          <span>{type}</span>
        </div>
      </div>
      <button className="w-full p-3 bg-green-300 rounded-lg text-black hover:text-white hover:bg-green-400  transition-all cursor-pointer "
      onClick={()=>{dispatch(AddItem({id:id,name:name,image:image,price:price,type:type,quantity:1}))
      toast.success("Item added to cart")}
  }
      >
        
        Add to Dish
      </button>
    </div>
  );
}

export default Card;
