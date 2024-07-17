import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            counter: 100,
            name: 'joydip',
            products: [],
            errorInfo: '',
            fetchComplete: false
        }
    },
    mutations: {
        increase(state, payload) {
            //state.counter += payload.value
            state.counter += payload
        },
        decrease(state, payload) {
            state.counter -= payload.value
        },
        success(state, payload) {
            state.fetchComplete = true;
            state.errorInfo = "";
            state.products = payload
        },
        failure(state, payload) {
            state.fetchComplete = true;
            state.errorInfo = payload;
            state.products = []
        },
        initiate(state) {
            state.fetchComplete = false;
            state.errorInfo = "";
            state.products = []
        },
    },
    actions: {
        async fetchProducts(context) {
            context.commit("initiate")
            try {
                const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
                const data = await resp.json()
                context.commit("success", data.slice(0, 5))

            } catch (error) {
                context.commit("failure", error.message)
            }
        }
    }
})

export default store