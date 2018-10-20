<template>
    <div class="navbar">
        <AuthorBrand></AuthorBrand>
        <NavLinks></NavLinks>
    </div>
</template>

<script>
    import AuthorBrand from './AuthorBrand.vue'
    import NavLinks from './NavLinks.vue'

    export default {
        components: {
            AuthorBrand,
            NavLinks
        }
    }
</script>

<style>
    .navbar{
        display: flex;
        align-items: stretch;
        box-sizing: border-box;
        padding: 0.5em;

        border-radius: 3px;
        border: 2px solid orange;
    }

    @media screen and (max-width: 425px){
        .navbar{
            flex-direction: column;
            flex-wrap: wrap;
        }
    }
</style>
