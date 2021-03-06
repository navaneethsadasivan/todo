export const state = () => ({
  list: [
    {
      text: "This is a text",
      done: true,
      id: 1,
      priority: 'critical'
    }
  ]
})

export const mutations = {
  add(state, data) {
    state.list.push({
      text: data['text'],
      done: false,
      id: state.list.length + 1,
      priority: data['priority'].toLowerCase()
    })
  },
  toggle(state, listItem) {
    listItem.done = !listItem.done
  },
  remove(state, listItem) {
    state.list.splice(state.list.indexOf(listItem), 1)
  }
}

export const getters = {
  getCount: state => {
    return state.list.length
  },
  getCompleted: state => {
    let counter = 0
    state.list.forEach(data => {
      if (data.done) {
        counter++
      }
    })
    return counter
  }
}
