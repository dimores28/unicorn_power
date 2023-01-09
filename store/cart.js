export const state = () => ({
    cart: null
 })

 export const getters =  {
    getCart: state => state.cart,
 }
 
 export const mutations  = {
    setCatr(state, cart){
        state.cart = cart;
    }
 }
 
 export const actions = {
    async loadCart({commit}) {
        const cart = await this.$axios.$get('https://fakestoreapi.com/carts/5');
        commit("setCatr", cart);
    }
 }