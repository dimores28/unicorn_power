export const state = () => ({
    cart: null,
    proccessId: [],

 })

 export const getters =  {
    getCart: state => state.cart,
    getItemsInCart: state => state.cart?.products,
    getQuantityGoods: state => state.cart?.products.length ?? 0,
    inProccess: state => id => state.proccessId.includes(id),
 }
 
 export const mutations  = {
    setCatr(state, cart){
        state.cart = cart;
    },
    setQuantity(state, { id, cnt }){
      state.cart.products = state.cart.products.map((prod) => (prod.productId === id ? {...prod, quantity: cnt} : prod));
    },
    startProccess(state, id){
		state.proccessId.push(id);
	},
	endProccess(state, rid){
		state.proccessId = state.proccessId.filter(id => id !== rid);
	}

 }
 
 export const actions = {
    async loadCart({commit}) {
        const cart = await this.$axios.$get('https://fakestoreapi.com/carts/2');
        commit("setCatr", cart);
    },
    async setCnt({ state, commit }, { id, cnt }){
      commit('startProccess', id);

      let validCnt = Math.max(1, cnt);

      const cart = await this.$axios.$put(`https://fakestoreapi.com/carts/${state.cart?.id}`, {
         userId:state.cart?.userId,
         date:state.cart?.date,
         products:state.cart?.products
     });

     
     if(cart){
      commit("setQuantity", { id, cnt: validCnt});
     }

      commit('endProccess', id);
    },
 }