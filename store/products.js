export const state = () => ({
   products: null,
})

export const getters =  {
   getProductsAll: (state) => {
      return state.products;
   },
   //getProductById: state => id => state.products.find(pr => pr.id == id),
   getProductById(state){
      return []
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



