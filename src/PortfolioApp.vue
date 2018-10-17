<template>
    <div id="portfolio-app">
        <Navbar></Navbar>
        <Portfolio></Portfolio>
        <Team></Team>
    </div>
</template>

<script>
    import Navbar from "./components/navbar/Navbar.vue";
    import Portfolio from "./components/portfolio/Portfolio.vue";
    import Team from "./components/team/Team.vue";

    export default {
        name: 'PortfolioApp',
        components: {
            Navbar,
            Portfolio,
            Team
        }
    };
</script>

<style scoped>
    #portfolio-app{
        display: grid;
        grid-template-areas: "navbar"
                             "portfolio"
                             "team"
                             "contact_form";
        grid-row-gap: 0.3em;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
