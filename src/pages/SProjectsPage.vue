<template>
    <div class="wrap">
    	<s-common-header></s-common-header>
	    <div class="case-nav">
	    	<ul>
	    		<li>
	    			<a href="#">
	    				<i class="icon-case-jiexi"></i>
	    				<h1>案例解析</h1>
	    			</a>
	    		</li>
	    		<li>
	    			<a href="#">
	    				<i class="icon-case-jiaz"></i>
	    				<h1>家装案例</h1>
	    			</a>
	    		</li>
	    		<li>
	    			<a href="#">
	    				<i class="icon-case-gongz"></i>
	    				<h1>工装案例</h1>
	    			</a>
	    		</li>
	    	</ul>
	    </div>
		<div class="case-jiexi">
			<s-title v-if="projectData.caseJiexi&&projectData.caseJiexi.title" :titles="projectData.caseJiexi.title"></s-title>
			<ul v-if="projectData.caseJiexi">
				<s-hot-list v-for="(items,index) in projectData.caseJiexi.pic" :key="index" :items="items"></s-hot-list>
			</ul>          
			<s-more v-if="projectData.caseJiexi&&projectData.caseJiexi.more" :more ="projectData.caseJiexi.more"></s-more>  
		</div>
		<div class="case-jiaz">
			<s-title v-if="projectData.caseJaz&&projectData.caseJaz.title" :titles="projectData.caseJaz.title"></s-title>
			<ul v-if="projectData.caseJaz">
			<s-case v-for="(items,index) in projectData.caseJaz.case" :key="index" :items="items"></s-case>
			</ul>
			<s-more v-if="projectData.caseJaz&&projectData.caseJaz.more" :more ="projectData.caseJaz.more"></s-more>
		</div>
		<div class="case-jiaz">
			<s-title v-if="projectData.caseGongz&&projectData.caseGongz.title" :titles="projectData.caseGongz.title"></s-title>
			<ul v-if="projectData.caseGongz">
			<s-case v-for="(items,index) in projectData.caseGongz.case" :key="index" :items="items"></s-case>
			</ul>
			<s-more v-if="projectData.caseGongz&&projectData.caseGongz.more" :more ="projectData.caseGongz.more"></s-more>
		</div>
	   <s-common-footer></s-common-footer>
    </div>
</template>
<script>
import SCommonTopHot from "../components/common/SCommonTopHot"
import SCommonHeader from "../components/common/SCommonHeader"
import SCommonFooter from "../components/common/SCommonFooter"
import STitle from "../components/children/STitle"
import SMore from "../components/children/SMore"
import SCase from "../components/children/SCase"
import SHotList from "../components/children/SHotList"
import DataApi from "../api/DataApi"
export default {
    components:{
        SCommonTopHot,
        SCommonFooter,
		SCommonHeader,
		STitle,
        SMore,
		SCase,
		SHotList	
	},
	data () {
		return {
			
			projectData:{}
				
			}
		},
		created(){
        this._initData()
    },
    methods:{
        _initData(){
            DataApi.getData(data=>{
                 console.log(data.projectData)
                this.projectData = data.projectData
            })
        }
    }
	}

</script>
<style scoped>
    @import "../assets/css/projects.css"
</style>
