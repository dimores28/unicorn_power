export const state = () => ({
   category: ["electronics","jewelery","men's clothing","women's clothing"]
})

export const getters =  {
   getAllCategories: state => state.category,
}

export const mutations  = {
   setCategory(state, cat) {
      state.category = cat;
   }
}

export const actions = {
   async AllCategories({commit}) {
      const category = await this.$axios.$get('https://fakestoreapi.com/products/categories');
      commit("setCategory", category);
   }
}



