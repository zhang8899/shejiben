
// fetch jquery axios

export default{

    /**
     * 获取数据
     *
     * @param {*} url
     *
     * @param {*} cb
     */
    get(url,cb){
      fetch(url).then(res=>
          res.json().then(cb)
      ).catch(err=>console.log(err))
  }
}