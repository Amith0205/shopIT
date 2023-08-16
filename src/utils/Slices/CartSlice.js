import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        cnt:0,
    },
    reducers:{
        addItem:(state,action)=>{
            console.log(action.payload);
            state.items.push(action.payload);
            state.cnt+=1;
        },
        deleteItem:(state,action)=>{
            // console.log(action.payload)
            
            items:state.items.filter(item=>item.id!==action.payload)
            // state.cnt-=1;
            // delete state.items[action.payload];
            // console.log(state.items)
        },
        clearCart:(state)=>{
            state.items=[]
            state.cnt=0;
        }
    }
})

export const {addItem,deleteItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;