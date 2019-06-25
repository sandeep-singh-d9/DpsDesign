import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // states
        selectedClass: [],
        divData: [],
        showNavBar: false,
        dynamicIndex: 0,
        dynamicType: 1,
        editorTempData: '<p>Content of the editor.</p>',
    },
    getters: {
        // getters
    },
    mutations: {
        // Dynamic state changes
        CHANGE_STATE (state, value) {
            state[value[0]] = value[1]
        },
        SET_DIV_DATA (state, value) {
            // push data to the divData state
            state.divData.push({name: value, one: '', two: '', three: '', four: '', five: '', six: '', seven: '', eight: '', nine: '', ten: '', eleven:'', twelve: '', thirteen:'', fourteen:'', fifteen:'', sixteen:'',seventeen:'', eighteeen:'', nineteen:'',twenty:'', twentyone:'', twentytwo:''})
        },
        SET_DIV_VALUE (state, value) {
            state.divData[state.dynamicIndex][state.dynamicType] = value
        },
        REMOVE_ITEM_FROM_DIV_DATA (state, value) {
            state.divData.splice(state.divData.indexOf(value), 1);
        },
        REMOVE_ITEM_AT_DIV_DATA (state, value) {
            state.divData.splice(value, 1);
        },
        MOVE_ITEM_DIV_DATA (state, value) {
            var from = value[0]
            var to = value[1]
            state.divData.splice(to, 0, state.divData.splice(from, 1)[0]);
        },
    },
    actions: {
        // call mutation on actions
        ACTION_CHANGE_STATE (context, value) {
            context.commit('CHANGE_STATE', value)
        },
        ACTION_PUSH_TO_DIV_DATA (context, value) {
            context.commit('SET_DIV_DATA', value)
        },
        ACTION_ADD_VALUE_TO_DIV_DATA (context, value) {
            context.commit('SET_DIV_VALUE', value)
        }
    },
    modules: {

    }

})