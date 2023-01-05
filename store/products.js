export const state = () => ({
   products: [],
})

export const getters =  {
   getProductsAll: (state) => {
      return state.products;
   },
   getProductById: (state)=> (id) =>{
      return state.products.find(pr => pr.id == id);
   }
}

export const mutations  = {
   setProducts(state, products){
      state.products = products;
   }
}

export const actions = {
   async all({commit}){
      const products = await this.$axios.$get('https://fakestoreapi.com/products');
      commit("setProducts", products);
   }
}



