import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
  name:"cart",
  initialState:[],
  reducers:{
    AddItem:(state,action)=>{
      let existItem = state.find((item)=>item.id===action.payload.id)
      if(existItem){
        return state.map((item)=>item.id===action.payload.id ?{...item, quantity:item.quantity+1}:item )
      }
      else{
        state.push(action.payload)
      }


      //state.push(action.payload);
    },

    RemoveItem:(state,action)=>{
      return state.filter(item=>item.id !== action.payload)
    },


    IncrementQuantity:(state,action)=>{
              return state.map((item)=>item.id===action.payload.id ?{...item, quantity:item.quantity+1}:item )


    },

    DecrementQuantity:(state,action)=>{
                    return state.map((item)=>item.id===action.payload.id ?{...item, quantity:item.quantity-1}:item )
    }

  },
})

export const {AddItem,RemoveItem, IncrementQuantity, DecrementQuantity}=cartSlice.actions;
export default cartSlice.reducer; 