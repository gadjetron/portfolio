<template>
    <div id="portfolio-app">
        <Navbar></Navbar>
    </div>
</template>

<script>
    import Navbar from "./components/navbar/Navbar.vue";

    export default {
        name: 'PortfolioApp',
        components: {
            Navbar
        }
    };

</script>

<style scoped>
    #portfolio-app{
        display: grid;
        grid-template-rows: minmax(100px, auto) repeat(4, 1fr);
        grid-template-areas: "navbar"
                             "portfolio"
                             "team"
                             "clients_opinions"
                             "contact_form";
        grid-row-gap: 0.3em;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
