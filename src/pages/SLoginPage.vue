<template>
    <div class="warp">
        <s-common-header></s-common-header>
        <section class="login-index">
            <p class="tips-b">登录注册</p>
            <p class="tips-s">未注册用户，验证后即完成注册</p>
            <div class="phoneBox">
                <input type="tel" class="phone-txt" name="phone" id="phone" placeholder="请输入手机号">
            </div>
            <div class="codeBox">
                <input type="tel" class="code-txt" name="code" id="code" placeholder="请输入验证码">
                <input type="button" class="postCodeBtn" id="postCodeBtn" value="获取验证码">
            </div>
            <input type="button" class="postBtn" value="登录">
            <p class="codeError"><a @click.stop="">收不到验证码？</a></p>
        </section>
        <section class="chose-type" style="display:none;"> 
            <p class="tips-b">欢迎来到设计本</p>
            <p class="tips-s">选择你的身份</p>
            <ul>
                <li>
                    <p>我是业主</p>
                    <p>热爱生活的梦想家</p>
                    <em class="icon-yz"></em>
                </li>
                <li>
                    <p>我是设计师</p>
                    <p>有颜有料有创意</p>
                    <em class="icon-sjs"></em>
                </li>
                <li>
                    <p>我是设计机构</p>
                    <p>专业用心不将就</p>
                    <em class="icon-company"></em>
                </li>
                <p class="check-tips">身份类型一旦确定便不可再更改了哦！</p>
            </ul>
            <input class="typeBtn" type="button" value="我选好了">
        </section>
        <section class="set-password" style="display:none;">
            <p class="tips-b">设置密码</p>
            <p class="tips-s">为了您的账号安全，请设置您的登录密码</p>
            <div class="passWordBox">
                <input type="password" class="password-txt" name="password" id="password" placeholder="请输入密码">
            </div>
            <p class="password-tips">密码为6-16位数字、字母和符号或其他组合</p>
            <input type="button" class= "setPassWprdBtn" id="loginBtn" value="确定">
        </section>
    </div>
</template>

<script>
import SCommonHeader from "../components/common/SCommonHeader"
export default {
    components:{
        SCommonHeader
    }
}
</script>

<style scoped> 
input{
    outline: none;
    border: none;
}
.login-index,.chose-type,.set-password{
    padding: 0 30px;
}
.tips-b{
    padding: 20px 0 0 10px;
    font-size: 28px;
    color: #333333;
    line-height: 40px
}
.tips-s{
    padding: 5px 0 0 10px;
    font-size: 15px;
    color: #C1C1C1;
    line-height: 21px;
}
.phoneBox,.codeBox,.passWordBox{
    margin-top: 37px;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #E3E3E3;
}
.phone-txt,.code-txt,.password-txt{
    padding: 18px 10px 12px;
    font-size: 18px;
    line-height: 24px;
    color: #222;
    background: none;
    border-radius: 0;
}
.login-index .phone-txt{
    width: 100%;
}
.login-index .codeBox{
    margin-top: 15px;
    display: flex;
    flex: 1;
}
.login-index .code-txt{
    width:0;
    flex: 2;
}
.postCodeBtn{
    padding: 0 10px 0 0;
    height: 50px;
    line-height: 50px;
    flex: 1;
    background: none;
    font-size: 13px;
    text-align: right;
}
.postBtn{
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 3px;
    color: #fff;
    font-size: 18px;
    margin-top: 30px;
}
.codeError{
    margin-top: 15px;
    width: 100%;
    line-height: 21px;
    font-size: 15px;
    color: #E3E3E3;
    text-align: right;
}
.chose-type{
    position: relative;
}
.chose-type ul{
    padding-top:30px;
}
.chose-type li {
    position: relative;
    height: 100px;
    padding-left: 30px;
    margin-bottom: 20px;
    background: #FFFFFF;
    border: 1px solid #fff;
    box-shadow: 0 3px 15px 0 rgba(0,0,0,0.10);
    border-radius: 6px;
}
.chose-type li p:nth-child(1) {
    width: auto;
    padding-top: 26px;
    font-size: 18px;
    color: #000;
    line-height: 25px;
}
.chose-type li p:nth-child(2) {
    width: auto;
    padding-top: 5px;
    font-size: 13px;
    color: #888;
    line-height: 18px;
}
.chose-type li em {
    position: absolute;
    right: 21.6px;
    width: 66px;
    display: block;
    background: url(https://img.shejiben.com/shejiben_img/wap/login/sprite.jpg?20190215);
    background-size: 204px auto;
}
.chose-type li .icon-yz {
    height: 63px;
    top: 18px;
    background-position: 0 0;
}
.chose-type li .icon-sjs {
    top: 14px;
    height: 70px;
    background-position: -70px 0;
}
.chose-type li .icon-company {
    top: 18px;
    height: 64px;
    background-position: -138px 0;
}
.chose-type .check-tips {
    position: absolute;
    top: 495px;
    left: 30px;
    font-size: 13px;
    color: #C5A364;
}
.typeBtn{
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 3px;
    color: #fff;
    font-size: 18px;
    margin-top: 57px;
}
.password-tips{
    margin-top:18px;
    font-size: 14px;
    line-height: 18px;
    color: #888;
}
.setPassWprdBtn{
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-radius: 3px;
    color: #fff;
    font-size: 18px;
    margin-top: 30px;
}
</style>
