<template>
    <Header />
    <div class="ph_margin"></div>
    <div class="box">
        <div class="resume">
            <div class="resume_left">
                <section> <i><img src="@img/resume.png" alt="头像"></i>
                    <h2>卢杰晟</h2>
                    <p>.NET中级开发工程师、项目负责人</p>
                    <span>抗压能力强</span><span>组织领导力</span><span>有执行力</span><span>耐心细心</span>
                </section>
                <ul class="resume_con">
                    <li class="re_xl">大专</li>
                    <li class="re_rq">1996年3月11日</li>
                    <li class="re_tell">188905509**</li>
                    <li class="re_email">2923280915@qq.com</li>
                    <li class="re_add">长沙市岳麓区</li>
                </ul>
                <h3>技能特长</h3>
                <ul class="resume_tec">
                    <li class="tec80">C#<span></span></li>
                    <li class="tec80">.NET<span></span></li>
                    <li class="tec60">MongoDB<span></span></li>
                    <li class="tec60">MySql<span></span></li>
                    <li class="tec60">Redis<span></span></li>
                    <li class="tec30">Docker<span></span></li>
                    <li class="tec30">Vue<span></span></li>
                    <li class="tec30">ElementUI<span></span></li>
                </ul>
            </div>
            <div class="resume_right">
                <h2>教育背景</h2>
                <p><span style="color:#808080;">长江工程职业技术学院 / 2015.9 &mdash; 2018.6</span></p>
                <p>强烈的上进心和求知欲，较强的学习能力和沟通能力，具备良好的团队合作精神。</p>
                <h2>工作经历</h2>
                <p><strong>.NET中级开发工程师</strong></p>
                <p><span style="color:#808080;">湖南因尚网络科技有限公司 - 项目负责人 / 2021.8 &mdash; 至今</span></p>
                <ul>
                    <li>作为项目负责人领导团队开发完成产品交付</li>
                    <li>参与产品需求梳理会，进行技术可行性风险评估和团队资源风险评估</li>
                    <li>主持迭代计划会，跟开发团队成员讲解需求，明确团队成员分工，制定WBS工作分解</li>
                    <li>代码审核，统筹联系前后端及测试人员完成联调工作，产品发布上线</li>
                </ul>
                <p><strong>.NET初级开发工程师</strong></p>
                <p><span style="color:#808080;">深圳市因尚网络科技股份有限公司 - 主程 / 2020.10 &mdash; 2021.7</span></p>
                <ul>
                    <li>参与系统的需求调研和需求分析，撰写相关技术文档</li>
                    <li>参与软件开发，确保负责模块的质量，代码和文档符合规范要求</li>
                    <li>根据项目负责人的安排，按时完成指定软件模块的设计、开发、测试等过程</li>
                </ul>
                <h2>自我评价</h2>
                <p></p>
                <ul>
                    <li>有作为项目负责人领导团队开发经验</li>
                    <li>技术较全面，前后端运维部署均有涉猎</li>
                    <li>沉稳大方，善于沟通，注重团队合作，追求代码质量，热爱学习，热衷浏览博客论坛交流技术</li>
                </ul>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Header from '@comp/home/Header.vue'
import Footer from '@comp/home/Footer.vue'
</script>

<style scoped>
@import '@css/home/base.css';
@import '@css/home/m.css';
</style>