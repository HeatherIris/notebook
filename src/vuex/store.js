import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex) 

// 数据
const state = {
    notes: [],
    activeNote: {},
    // starNotes: {}
}

// const getters = {
//     notes: state => state.notes,
//     activeNotes: state => state.activeNote,
//     starNotes: state => state.starNote
// }

const actions = {
    updateActiveNote: ({commit}, item) => {
		return commit('SET_ACTIVE', item)
    },
    addNote: ({commit}) => {
        return commit('ADD')
    },
    editNote: ({commit}, text) => {
        return commit('EDIT', text)
    },
    deleNote: ({commit}, note) => {
        return commit('DELE', note)
    },
    addStar: ({commit}) => {
		return commit('STAR')
    },
    removeStar: ({commit}) => {
        return commit('RESTAR')
    }
}
// 方法
const mutations = {
    ADD:function (state) {
        const noteid = Math.round(Math.random()*10000);
        const newNote = {
            id: noteid,
            text:'say something...',
            star: false
        }
        state.notes.push(newNote);
        console.log(state.notes)
        // console.log(state.notes[1].star);
        // state.activeNote = newNote
    },
    DELE: function (state) {
        let notes = state.notes;
        for (let key in notes) {
            if (notes[key].id == state.activeNote.id) {
                // console.log(notes[key].id);
                state.notes.splice(key, 1);
            }
        }
        state.activeNote = state.notes[0];
        
    },
    EDIT: function (state, text) {
        state.activeNote.text = text;
        for (let i in state.notes) {
            if (i == state.activeNote) {
                i.text = text; 
            }
        }
    },
    STAR:function (state) {
        // state.activeNote.star = true;
        if (this.isStar = true) {
            state.activeNote.star = true;
        }
    },
    RESTAR:function (state) {
        // state.activeNote.star = false;
        if (this.isStar = false) {
            state.activeNote.star = false;
        }
    },
    SET_ACTIVE:function (state, item) {
        state.activeNote = item;
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions 
    // getters 
}) 
export default store