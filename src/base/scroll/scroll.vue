<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'scroll',
    props: {
        click: {
            type: Boolean,
            default: true
        },
        probeType: {
            type: Number,
            default: 1,
        },
        data: {
            type: Array,
            default: null
        }
    },
    mounted() {
        setTimeout(() => {
            // console.log(2)
            this._initScroll()
        },20)
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
                return false
            }
            // console.log(1)
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: this.click,
                probeType: this.probeType
            })
        },
        enable() {
            this.scroll && this.scroll.enable()
        },
        disable() {
            this.scroll && this.scroll.disable()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        // scrollTo() {
        //     this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        // },
        scrollToElement(el, time, offsetX, offsetY, easing) {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)        
        }
    },
    watch:{
        data() {
            setTimeout(() => {
                this.refresh()
            }, 20)
        }
    }
}
</script>
