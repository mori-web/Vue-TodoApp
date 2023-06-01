const mori = {
  data(){
    return {
      message : 'あいうえお',
      newItem: '',
      todos: [],
    }
  },
  methods: {
    addItem: function (e) {
      if (this.newItem === '') return //もし空入力であればreturnで処理を飛ばす
      // let todo = {
      //   item: this.newItem
      // }
      let todo = {
        item: this.newItem,
        isDone:false
      }
      this.todos.push(todo)
      this.newItem = '' //入力後は、入力部分の削除する
    },
    // 削除の機能(splice(消す番号,消す番号の長さの数))
    deleteItem: function (index) { 
      this.todos.splice(index,1)
    },
  }
}

let app = Vue.createApp(mori)
app.mount('#app')