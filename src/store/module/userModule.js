//state guarda la lista de usuarios
const state = {
    users: []
}

//el método allUsers da acceso a la lista de usuarios
const getters = {
    allUsers: state => state.users
}

//el action getUsers llama al mutation para cargar los usuarios con la info del Local Storage
//el action register llama al mutation para guardar el usuario nuevo en el Local Storage
const actions = {
    getUsers({ commit }) {
        state.users = JSON.parse(localStorage.getItem('users'));
        if (state.users === null) {
            state.users = [];
        }
        commit('setUsers', state.users);
    },
    register({ commit }, form) {
        commit('registerRequest', form);
        localStorage.setItem('users', JSON.stringify(state.users));
    },
};

//los mutations son los que cambian el state
//setUsers actualiza la lista de usuarios
//registerRequest agrega un nuevo usuario a la lista
const mutations = {
    setUsers: (state, users) => (state.users = users),
    registerRequest: (state, form) => state.users.unshift(form)
};

export const userModule = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};