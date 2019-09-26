import Vue from 'vue';
import Vuex from 'vuex';
//importa el módulo del store
import { userModule } from './module/userModule';

Vue.use(Vuex);
//exporta el store
export default new Vuex.Store({
    modules: {
        userModule
    }
});