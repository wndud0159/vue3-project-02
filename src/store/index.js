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
        SET_USERNAME: (state, username) => {
            state.user.username = username
        },
        SET_ADDRESS: (state, address) => {
            state.user.address = address
        },
        SET_INTRODUCE_MYSELF: (state, introduce_myself) => {
            state.user.introduce_myself = introduce_myself
        },
        SET_RECORD_AT: (state, record_at) => {
            state.user.record_at = record_at
        },
        SET_MYCHECKLIST_COUNT: (state, count) => {
            state.user.mychecklist_count = count
        },
        SET_MYCHECKLIST_SELECTION: (state, selection) => {
            state.user.mychecklist_selection = selection
        }
    },
    plugins: [createPersistedState()],
})


export default store