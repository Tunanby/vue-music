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
            this._initScroll()
        },50)
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
                return false
            }
            console.log(1)
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: this.click,
                probeType: this.probeType
            })
        },
        // enable() {
        //     this.scroll && this.scroll.enable()
        // },
        // disable() {
        //     this.scroll && this.scroll.disable()
        // },
        refresh() {
            this.scroll && this.scroll.refresh()
        }
    },
    watch:{
        data() {
            setTimeout(() => {
                this.refresh()
            }, 50)
        }
    }
}
</script>
