import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        playlist: [{
            name: "这城市的你我",
            id: 1838080899,
            al: {
                id: 126145071,
                name: "这城市的你我",
                pic: 109951165898808900,
                picUrl: "http://p3.music.126.net/tS9xr_DxycG0U6ty6g__mw==/109951165898808895.jpg",
                pic_str: "109951165898808895"
            },
            ar: [0]
        }],
        playCurrentIndex: 0,

    },
    mutations: {
        setPlaylist(state, value) {
            state.playlist = value
        },
        setPlayIndex(state, value) {
            state.playCurrentIndex = value
        }

    },
    actions: {
    },
    modules: {
    }
})
