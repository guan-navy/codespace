import { createStore } from 'vuex'
import axios from 'axios'
//仓库没有生命周期
export default createStore({
  state() {   //全局的data
    return{
      itemNum:1,//第几题
      questionList:[],//问题数据源,
      answerId:[]

    }
  },
  getters: {// 相当于computed
    rightAnswer(state){
      let arr = []
      for (let question of  state.questionList) {
        for(let answer of question.topic_answer){
          if(answer.is_standard_answer == 1){
            arr.push(answer.topic_answer_id)
          }
        }
        
      }
      return arr
    }
  },
  mutations: {//相当于methods 同步的方式去修改数据源
    getQuestionList(state,list){
      state.questionList= list
    },
    recordAnswer(state,id){
      state.answerId.push(id)
    },
    nextItem(state){
      //保存当前答案
      state.itemNum +=1
      
  }
  },
  actions: {//async methods  面试考察,异步的,actons里的方法访问不到数据源
    getQuestionListAction(context){//context 是整个store对象,第二种写法直接写commit,解构可以少写context对象
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/fri').then(res=>{
        console.log(res);
        //触发getQuestionList
        context.commit('getQuestionList',res.data)
      })

    },
    recordAnswerAction({commit,state}, id){
      commit('recordAnswer',id)
      if(state.itemNum<state.questionList.length){
        commit('nextItem')
      }

      
    }
  },
  modules: {

  }
})
