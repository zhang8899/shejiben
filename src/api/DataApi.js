import Api from "../common/Api"
import {DATAURL} from "../common/AjaxUrlShema"



export default{


        /**
         * 调用数据的的方法
         * @param {*} cb 
         */
    getData(cb){
        Api.get(DATAURL,cb)
    }
  
}