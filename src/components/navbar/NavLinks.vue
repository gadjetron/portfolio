<template>
    <div class="nav-links">
        <NavLink :url="link" :key="link.text" v-for="link in links"></NavLink>
    </div>
</template>

<script>
    import NavLink from "./NavLink.vue";

    export default {
        name: 'NavLinks',
        data () {
            return {
                links: [
                    {
                        text: 'Home',
                        path: '/'
                    },
                    {
                        text: 'Service',
                        path: '/service'
                    },
                    {
                        text: 'Portfolio',
                        path: '/portfolio'
                    },
                    {
                        text: 'Team',
                        path: '#team'
                    },
                    {
                        text: 'Blog',
                        path: '/blog'
                    },
                    {
                        text: 'Contact',
                        path: '#contact_us'
                    },
                ],
            }
         },
        components: {
            NavLink
        }
    }
</script>

<style scoped>
    .nav-links{
        display: flex;
        flex-basis: 75%;
        justify-content: space-around;
        margin-left: auto;
    }

    @media screen and (max-width: 425px){
        .nav-links{
            flex-direction: column;
            justify-content: center;
            margin-left: 0;
        }
    }
</style>
