import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            user: null,
        }
    },//s
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        },
        SET_PROFILE_IMAGE: (state, image) => {
            state.user.profile_image_url = image
        },
        SET_NICKNAME: (state, nickname) => {
            state.user.nickname = nickname
        },
        SET_INTRODUCE_MYSELF: (state, introduce_myself) => {
            state.user.introduce_myself = introduce_myself
        },
        SET_RECORD_URL: (state, record_url) => {
            state.user.record_url = record_url
        }
    },
    plugins: [createPersistedState()],
})


export default store