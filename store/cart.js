export const state = () => ({
    cart: null
 })

 export const getters =  {
    getCart: state => state.cart,
    getItemsInCart: state => state.cart?.products,
    getQuantityGoods: state => state.cart?.products.length ?? 0,
 }
 
 export const mutations  = {
    setCatr(state, cart){
        state.cart = cart;
    },
    setQuantity(state, { id, cnt }){
      state.cart.products = state.cart.products.map((prod) => (prod.productId === id ? {...prod, quantity: cnt} : prod));
    }

 }
 
 export const actions = {
    async loadCart({commit}) {
        const cart = await this.$axios.$get('https://fakestoreapi.com/carts/5');
        commit("setCatr", cart);
    },
    async setCnt({ commit }, { id, cnt }){
      console.log({ id, cnt });
      //TODO server request
      commit("setQuantity", { id, cnt });
    },
 }