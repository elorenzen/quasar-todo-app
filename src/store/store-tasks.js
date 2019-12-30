import Vue from 'vue'

const state = {
  tasks: {
    0: {
      name: 'KKX redeployment changes',
      completed: false,
      dueDate: '12/23/19',
      dueTime: '17:00'
    },
    1: {
      name: 'Follow-up call with DeepWork',
      completed: false,
      dueDate: '12/27/19',
      dueTime: '9:00'
    },
    2: {
      name: "Build 'Marquitta Mobile'",
      completed: false,
      dueDate: '2/28/20',
      dueTime: '10:00'
    }
  }
  /* tasks: [
    {
      id: 1,
      name: 'KKX redeployment changes',
      completed: false,
      dueDate: '12/23/19',
      dueTime: '17:00'
    },
    {
      id: 2,
      name: 'Follow-up call with DeepWork',
      completed: false,
      dueDate: '12/27/19',
      dueTime: '9:00'
    },
    {
      id: 3,
      name: "Build 'Marquitta Mobile'",
      completed: false,
      dueDate: '2/28/20',
      dueTime: '10:00'
    }
  ] */
}

const mutations = {
  updateTask (state, payload) {
    Object.assign(
      state.tasks[payload.id],
      payload.updates
    )
  },
  deleteTask (state, id) {
    Vue.delete(state.tasks, id)
  }
}

const actions = {
  updateTask ({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask ({ commit }, id) {
    commit('deleteTask', id)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
