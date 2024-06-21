import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsInCart: localStorage.getItem("itemsInCart") ? JSON.parse(localStorage.getItem("itemsInCart")) : [],
    module:[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    
}
const  cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.itemsInCart.findIndex(
                (item) => item.id === action.payload.id
            );
            if(itemIndex >= 0){
                state.itemsInCart[itemIndex].itemsQuantiti += 1;
            }else{
                const tempProduct = {
                    ...action.payload, itemsQuantiti: 1};
                    state.itemsInCart.push(tempProduct)
            }

            localStorage.setItem("itemsInCart", JSON.stringify(state.itemsInCart))
            
        },
        deleteItemFromCart: (state,action) => {
            const nextCartItems =  state.itemsInCart.filter(itemsInCart => itemsInCart.id !== action.payload.id);
            state.itemsInCart = nextCartItems;
            localStorage.setItem("itemsInCart", JSON.stringify(state.itemsInCart))
            
        },
        decrement: (state,action) => {
            const itemIndex = state.itemsInCart.findIndex(
                itemsInCart => itemsInCart.id === action.payload.id
            );
            if(state.itemsInCart[itemIndex].itemsQuantiti > 1) {
                state.itemsInCart[itemIndex].itemsQuantiti -= 1;
            } else if (state.itemsInCart[itemIndex].itemsQuantiti === 1){
                const nextCartItems =  state.itemsInCart.filter(
                    itemsInCart => itemsInCart.id !== action.payload.id);
                state.itemsInCart = nextCartItems; 
            }
            localStorage.setItem("itemsInCart", JSON.stringify(state.itemsInCart))
            
        },
        addModule:(state,action) => {
            const tempProduct1 = {
                ...action.payload, itemsQuantiti: 1};
                state.module.push(tempProduct1)
                localStorage.setItem("itemsInCart", JSON.stringify(state.itemsInCart))
        },
        deleteModule:(state,action) => {
            const nextCartItems1 =  state.module.filter(module => module.id !== action.payload.id);
            state.module = nextCartItems1;
            localStorage.setItem("itemsInCart", JSON.stringify(state.itemsInCart))
            
        },
        
        },
        
        // getTotals(state,action){
        //     let {total, quantity} = state.itemsInCart.reduce(
        //         (cartTotal, item) => {
        //             const{price,itemsQuantiti} = item;
        //             const itemTotal = price * itemsQuantiti;
        //             cartTotal.total += itemTotal
        //             cartTotal.quantity += itemsQuantiti

        //             return cartTotal
        //         },
        //         {
        //             total: 0,
        //             quantity: 0,
        //         }
        //     );

        //     state.cartTotalQuantity = quantity;
        //     state.cartTotalAmount = total
        // }
    // }
}) 


export const {addToCart, deleteItemFromCart,decrement,getTotals,addModule, deleteModule } = cartSlice.actions;
export default cartSlice.reducer;