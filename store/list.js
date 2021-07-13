export const state = () => ({
  list: [
    {
      text: "This is a text",
      done: true,
      id: 1
    }
  ]
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false,
      id: state.list.length + 1
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
  }
}
