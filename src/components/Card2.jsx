import React from 'react'
import image1 from '../assets/image1.webp'
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQuantity, IncrementQuantity, RemoveItem } from '../redux/cartSlice';


function Card2({name,id,price,image,quantity}) {
  let dispatch=useDispatch();
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between '>
      <div className='w-[60%] h-full flex gap-4'>
        <div className='w-[60%] h-full overflow-hidden '>
          <img src={image} alt="image1" className='object-cover rounded-lg'/>
        </div>
        <div className='w-[40%] h-full flex flex-col gap-3'>

          <div className='text-lg text-gray-800 font-semibold'>{name}</div>
          <div className='w-[110px] h-[50px] bg-slate-500 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400'>
            <button className='w-[30%] h-full bg-white justify-center items-center text-green-400 text-xl hover:bg-gray-200'
            onClick={()=>{
             quantity>1 ? dispatch(DecrementQuantity({id})) :quantity=1
            }}
            >-</button>
            <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>{quantity}</span>
            <button className='w-[30%] h-full bg-white justify-center items-center hover:bg-gray-200'
            onClick={()=>{
              dispatch(IncrementQuantity({id})) 
            }}>
              +</button>
          </div>
        </div>
      </div>

      <div>
        <div className='flex flex-col justify-start items-end gap-6'>
              <span className='text-xl text-green-400 font-semibold'>Rs  {price}/-</span>
              <RiDeleteBin2Line className='w-[30px] h-[30px] text-red-400 cursor-pointer'
              onClick={()=>dispatch(RemoveItem(id))}
              />

        </div>
      </div>   
      
    </div>
  )
}

export default Card2
