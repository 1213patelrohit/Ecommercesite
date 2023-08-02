import { createSlice } from "@reduxjs/toolkit"
const cartSlice= createSlice({
    name: "cart",
    initialState:[],
    reducers: {
        Add(state, action){
            let myindex = -1;
            state.map((item,index)=>{
                if(item.id === action.payload.id){
                    myindex = index
                }
            })
            if(myindex==-1){
            state.push({
                id: action.payload.id,
                price: action.payload.price,
                category: action.payload.category,
                title: action.payload.title,
                image: action.payload.image,
                quantity: action.payload.quantity +1

            })
            // console.log("ppppp",action.payload)
            }else{
                state[myindex].quantity = state[myindex].quantity+ 1
            }
           
        },
        remove(state,action){
           return state.filter((item)=>item.id !==action.payload)
        },
       
        removeOnePRoduct(state,action){
            let myindex = -1;
            state.map((item,index)=>{

                if(item.id === action.payload.id){
                    myindex= index
                }
            });
            if(myindex ===-1){}
            else{
                state[myindex].quantity = state[myindex].quantity- 1
            }
          
        }}})

export const {Add, remove,removeOnePRoduct} = cartSlice.actions
export default cartSlice.reducer