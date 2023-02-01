<template>
    <div class="home">
      
        <Loginview msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import Loginview from '@/components/Loginview.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    components: {
        Loginview
    }
}
</script>
