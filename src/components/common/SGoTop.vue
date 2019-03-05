
<template>
    <div id="goTop">
        <div class="goTop" v-show="goTopShow" @click="goTop">
            <i class=" goTopIcon"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: "goTop",
    data() {
        return {
            scrollTop: "",
            goTopShow: false
        };
    },
    watch: {
        scrollTop(val) {
            if (this.scrollTop > 500) {
                this.goTopShow = true;
            } else {
                this.goTopShow = false;
            }
        }
    },
    methods: {
        handleScroll() {
            this.scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (this.scrollTop > 500) {
                this.goTopShow = true;
            }
        },
        goTop() {
            let timer = null,
                _that = this;
            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(function fn() {
                if (_that.scrollTop > 0) {
                    _that.scrollTop -= 50;
                    document.body.scrollTop = document.documentElement.scrollTop =
                        _that.scrollTop;
                    timer = requestAnimationFrame(fn);
                } else {
                    cancelAnimationFrame(timer);
                    _that.goTopShow = false;
                }
            });
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>
 
<style scoped>
.goTop {
    position: fixed;
    right:25px;
    bottom: 60px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(119, 121, 125, 0.7);
    cursor: pointer;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}
.goTopIcon::after{
    height:10px;
    width: 10px;
    display: block;
    content: ' ';
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(-135deg);
    position: absolute;
    left: 15px;
    top:15px;
}
.goTop:hover .goTopIcon {
    background-color: rgba(51, 153, 255, 1);
}
.goTopIcon {
    font-size: 20px;
    color: rgba(51, 153, 255, 0.8);
}
</style>
