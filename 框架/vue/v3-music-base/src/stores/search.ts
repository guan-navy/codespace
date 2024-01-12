import { defineStore } from 'pinia'
import {getSearchSuggest} from '@/api/index'
export const useSearchStore = defineStore('search',{
    state: () => {
        return {
            showSearchView: false,
            searchKeyWord:'',
            suggestData:{}
        }
    },
    getters:{
        showHot: state => state.searchKeyWord === ''
    },
    actions:{
        async suggest(){
            //跟ref不一样 proxy
            this.suggestData = await getSearchSuggest(this.searchKeyWord)
        }
    }
})