<template>
    <div class="login">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png" alt=""/></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                        <span class="checked">帐号登录</span
                        ><span class="sep-line">|</span><span>扫码登录</span>
                    </h3>
                    <div class="input">
                        <input
                            type="text"
                            placeholder="请输入帐号"
                            v-model="username"
                        />
                    </div>
                    <div class="input">
                        <input
                            type="password"
                            placeholder="请输入密码"
                            v-model="password"
                        />
                    </div>
                    <div class="btn-box">
                        <a href="javascript:;" class="btn" @click="login"
                            >登录</a
                        >
                    </div>
                    <div class="tips">
                        <div class="sms" @click="showModal = true">
                            手机短信登录/注册
                        </div>
                        <div class="reg">立即注册<span>|</span>忘记密码？</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-link">
                <a href="https://www.imooc.com/u/1343480" target="_blank"
                    >河畔一角主页</a
                ><span>|</span>
                <a
                    href="https://coding.imooc.com/class/113.html"
                    target="_blank"
                    >Vue全栈课程</a
                ><span>|</span>
                <a
                    href="https://coding.imooc.com/class/236.html"
                    target="_blank"
                    >React全家桶课程</a
                ><span>|</span>
                <a
                    href="https://coding.imooc.com/class/343.html"
                    target="_blank"
                    >微信支付专项课程（H5+小程序/云+Node+MongoDB）</a
                >
            </div>
            <p class="copyright">
                Copyright ©2019 mi.futurefe.com All Rights Reserved.
            </p>
        </div>
        <modal
            title="注册"
            btnType="3"
            :showModal="showModal"
            @submit="register"
            @cancel="showModal = false"
        >
            <template v-slot:body>
                <div class="input">
                    <input
                        type="text"
                        placeholder="请输入账号"
                        v-model="rusername"
                    />
                </div>
                <div class="input">
                    <input
                        type="text"
                        placeholder="请输入密码"
                        v-model="rpassword"
                    />
                </div>
            </template>
        </modal>
    </div>
</template>
<script>
// 导入mapAction 演示一下 其实简单的项目没有必要
import { mapActions } from 'vuex'
import Modal from '../components/Modal'
export default {
    name: 'login',
    components: {
        Modal
    },
    data() {
        return {
            username: '',
            password: '',
            userId: '',
            showModal: false,
            rusername: '',
            rpassword: ''
        }
    },
    methods: {
        login() {
            // 绝了! 第一次见到 很牛
            let { username, password } = this
            this.axios
                .post('/user/login', {
                    username,
                    password
                })
                .then(res => {
                    this.$cookie.set('userId', res.id, { expires: 'Session' })
                    // 触发一个action
                    // this.$store.dispatch('saveUserName', res.username)
                    // 用mapActions
                    this.saveUserName(res.username)
                    this.$router.push({
                        name: 'index',
                        // params不会被放在url中 query会
                        params: {
                            from: 'login'
                        }
                    })
                })
                .catch(err => {
                    if (err.status) {
                        this.$message.error('输入框不能为空')
                    } else {
                        this.$message.error(err)
                    }
                })
        },
        ...mapActions(['saveUserName']),
        register() {
            this.axios
                .post('/user/register', {
                    username: this.rusername,
                    password: this.rpassword,
                    email: Math.random()
                })
                .then(() => {
                    this.$message.success('注册成功')
                    this.showModal = false
                })
                .catch(err => {
                    if (err.status) {
                        this.$message.error('输入框不能为空')
                    } else {
                        this.$message.error(err)
                    }
                })
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/base.scss';
.login {
    & > .container {
        height: 113px;
        img {
            width: auto;
            height: 100%;
        }
    }
    .wrapper {
        background: url('/imgs/login-bg.jpg') no-repeat center;
        .container {
            height: 576px;
            .login-form {
                box-sizing: border-box;
                padding-left: 31px;
                padding-right: 31px;
                width: 410px;
                height: 510px;
                background-color: #ffffff;
                position: absolute;
                bottom: 29px;
                right: 0;
                h3 {
                    line-height: 23px;
                    font-size: 24px;
                    text-align: center;
                    margin: 40px auto 49px;
                    .checked {
                        color: #ff6600;
                    }
                    .sep-line {
                        margin: 0 32px;
                    }
                }
                .input {
                    display: inline-block;
                    width: 348px;
                    height: 50px;
                    border: 1px solid #e5e5e5;
                    margin-bottom: 20px;
                    input {
                        width: 100%;
                        height: 100%;
                        border: none;
                        padding: 18px;
                    }
                }
                .btn {
                    width: 100%;
                    line-height: 50px;
                    margin-top: 10px;
                    font-size: 16px;
                }
                .tips {
                    margin-top: 14px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    cursor: pointer;
                    .sms {
                        color: #ff6600;
                    }
                    .reg {
                        color: #999999;
                        span {
                            margin: 0 7px;
                        }
                    }
                }
            }
        }
    }
    .footer {
        height: 100px;
        padding-top: 60px;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-link {
            a {
                color: #999999;
                display: inline-block;
            }
            span {
                margin: 0 10px;
            }
        }
        .copyright {
            margin-top: 13px;
        }
    }

    // 模态框的 上面有重复的懒得删了
    .input {
        // display: inline-block;
        width: 348px;
        height: 50px;
        border: 1px solid #e5e5e5;
        margin: auto;
        margin-bottom: 20px;
        input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
        }
    }
}
</style>
