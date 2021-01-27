<template>
    <div>
        <div class="footer">
            <div class="footer-logo">
                <img src="/imgs/logo-footer.png" alt="" />
                <p>小米商城</p>
            </div>
            <div class="footer-link">
                <a href="https://github.com/linzhefeng/mimall" target="_blank"
                    >github仓库</a
                >
                <a href="javascript:;">关于小米</a>
                <a href="javascript:;">简介</a>
                <a href="javascript:;">关于</a>
            </div>
            <div class="copyright">
                © mi.com 京ICP证110507号 京ICP备10046444号
                京公网安备11010802020134号 京网文[2020]0276-042号
                <!-- <span class="domain"></span> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>
<style lang="scss">
.footer {
    height: 234px;
    border-top: 4px solid #ff6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
        margin-top: 53px;
        margin-bottom: 31px;
        img {
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link {
        margin-bottom: 13px;
        a {
            color: #999999;
            display: inline-block;
            margin-right: 15px;
            &::after {
                content: '';
                border-right: 1px solid #999999;
                margin-left: 15px;
            }
            &:last-child::after {
                display: none;
            }
        }
    }
    .copyright {
        margin-top: 13px;
        .domain {
            color: #ff6600;
        }
    }
}
</style>
