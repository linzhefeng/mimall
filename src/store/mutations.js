/* 
商城vuexmutations
*/
export default {
    saveUserName(state, username) {
        state.username = username
    },
    saveCartCount(state, count) {
        state.cartCount = count
    }
}
