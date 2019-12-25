const state = {
  tasks: [
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
  ]
}

const mutations = {

}

const actions = {

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
