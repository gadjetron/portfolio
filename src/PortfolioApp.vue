<template>
    <div id="portfolio-app">
        <Navbar></Navbar>
        <Portfolio></Portfolio>
    </div>
</template>

<script>
    import Navbar from "./components/navbar/Navbar.vue";
    import Portfolio from "./components/portfolio/Portfolio.vue";

    export default {
        name: 'PortfolioApp',
        components: {
            Navbar,
            Portfolio
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
