<template> <div>  <b-button type="submit" @click="userCall()" variant="primary">Show </b-button> {{formFin}}</div> </template>

<script>
import store from '@/store/index'

export default {
    props: {
        formFin: Object
        },
    data() {
        return {
            user: {}
        }
    },
    methods: {
        userCall() {
            this.formFin = this.formFin
        }
        
    },
    mounted() {
        // use commit instead
        // store.commit('appendUser', this.home.handleSubmit.payload)
        // const user = this.$store.commit('appendUser', this.home.handleSubmit.payload)
        // this.user = user
        
    }
}
</script>