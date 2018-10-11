<template>
    <div class="portfolio-items">
        <PortfolioItem :key="i" v-for="i in 10"></PortfolioItem>
    </div>
</template>

<script>
    import PortfolioItem from "./PortfolioItem.vue";

    export default {
        name: 'PortfolioItems',
        components: {
            PortfolioItem
        }
    }
</script>

<style scoped>
    .portfolio-items{
        display: grid;
        align-self: stretch;
        grid-gap: 1em;
        gap: 1em;
        margin-top: 1em;
        margin-bottom: 1.5em;
    }

    @media screen and (max-width: 320px),
           screen and (min-width: 321px) and (max-width: 425px){
        .portfolio-items{
            grid-template-columns: 1fr;
        }
    }
    @media screen and (max-width: 320px){
        .portfolio-items{
            grid-auto-rows: 260px;
        }
    }
    @media screen and (min-width: 321px) and (max-width: 375px){
        .portfolio-items{
            grid-auto-rows: 260px;
        }
    }
    @media screen and (min-width: 376px) and (max-width: 425px){
        .portfolio-items{
            grid-auto-rows: 320px;
        }
    }
    @media screen and (min-width: 426px) and (max-width: 768px){
        .portfolio-items{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (min-width: 426px) and (max-width: 690px){
        .portfolio-items{
            grid-auto-rows: 290px;
        }
    }
    @media screen and (min-width: 691px) and (max-width: 768px){
        .portfolio-items{
            grid-auto-rows: 320px;
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1160px){
        .portfolio-items{
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media screen and (min-width: 769px) and (max-width: 866px){
        .portfolio-items{
            grid-auto-rows: 240px;
        }
    }
    @media screen and (min-width: 867px) and (max-width: 960px){
        .portfolio-items{
            grid-auto-rows: 260px;
        }
    }
    @media screen and (min-width: 961px) and (max-width: 1024px){
        .portfolio-items{
            grid-auto-rows: 290px;
        }
    }
    @media screen and (min-width: 1025px) and (max-width: 1160px){
        .portfolio-items{
            grid-auto-rows: 320px;
        }
    }
    @media screen and (min-width: 1161px) and (max-width: 1760px){
        .portfolio-items{
            grid-template-columns: repeat(4, 1fr);
        }
    }
    @media screen and (min-width: 1161px) and (max-width: 1440px){
        .portfolio-items{
            grid-auto-rows: 260px;
        }
    }
    @media screen and (min-width: 1441px) and (max-width: 1760px){
        .portfolio-items{
            grid-auto-rows: 330px;
        }
    }
    @media screen and (min-width: 1761px){
        .portfolio-items{
            grid-template-columns: repeat(5, 1fr);
        }
    }
    @media screen and (min-width: 1761px) and (max-width: 1920px){
        .portfolio-items{
            grid-auto-rows: 320px;
        }
    }
    @media screen and (min-width: 1921px) and (max-width: 2150px){
        .portfolio-items{
            grid-auto-rows: 360px;
        }
    }
    @media screen and (min-width: 2151px) and (max-width: 2300px){
        .portfolio-items{
            grid-auto-rows: 400px;
        }
    }
    @media screen and (min-width: 2301px) and (max-width: 2560px){
        .portfolio-items{
            grid-auto-rows: 470px;
        }
    }
    @media screen and (min-width: 2561px){
        .portfolio-items{
            grid-auto-rows: 480px;
        }
    }
</style>

