<template>
    <header>
        <div class="box">
            <div class="logo"><a href="/"><img src="@img/logo.png" alt="logo"></a></div>
            <div class="ad_top"><a href="/"><img src="@img/ad01.jpg" alt="广告"></a></div>
            <div class="contact_icon">
                <ul>
                    <li><a href="http://wpa.qq.com/msgrd?v=3&uin=2923280915&site=qq&menu=yes" target="_blank"><i
                                class="icon_qq"></i></a>
                    </li>
                    <li><a href="tel:188905509**" target="_blank"><i class="icon_tel"></i></a></li>
                    <li><a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=2923280915@qq.com"
                            target="_blank"><i class="icon_email"></i></a></li>
                    <li><i class="icon_weixin"><img src="@img/wx.png" alt="Lenceas"></i></li>
                </ul>
            </div>
            <div class="clear"></div>
            <nav>
                <ul id="starlist">
                    <li><a href="/">网站首页</a></li>
                    <li><a href="/">博文日记</a></li>
                    <li class="menu"><a href="#">文摘畅读</a>
                        <ul class="sub">
                            <li><a href="/">励心小品</a></li>
                            <li><a href="/">十八而志</a></li>
                            <li><a href="/">世间感动</a></li>
                        </ul>
                        <span></span>
                    </li>
                    <li><a href="/">我的相册<i></i></a></li>
                    <li><a href="/">我的视频</a></li>
                    <li><a href="/about">个人简历</a></li>
                </ul>
                <h2 id="mnavh"><span class="navicon"></span></h2>
                <div class="is-search"> <i></i> </div>
                <div class="search-page">
                    <div class="search_box">
                        <div class="go-left"></div>
                        <div class="search">
                            <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字词"
                                style="color: rgb(153, 153, 153);"
                                onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}"
                                onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}" type="text">
                            <input name="show" value="title" type="hidden">
                            <input name="tempid" value="1" type="hidden">
                            <input name="tbname" value="news" type="hidden">
                            <input name="Submit" class="input_submit" value="搜索" type="submit" @click="search">
                        </div>
                    </div>
                </div>
                <!--search end-->
            </nav>
        </div>
    </header>
</template>

<script>
import '@js/jquery-3.6.0.min.js'
import '@js/comm.js'
</script>

<script setup>
import $util from '../../api/util'
const search = () => {
    $util.msg_warning('搜索功能尚未开放！')
    $util.notify_warning('消息通知', '搜索功能尚未开放！')
}
</script>

<style scoped>
@import '@css/home/base.css';
@import '@css/home/m.css';
</style>