<template>
    <div class="portfolio-block">
        <h1 class="portfolio-block__portfolio-header">Portfolio</h1>

        <PortfolioItems></PortfolioItems>

        <a class="portfolio-block__all-works-button" href="/portfolio">See all works</a>
    </div>
</template>

<script>
    import PortfolioItems from "./PortfolioItems.vue";

    export default {
        name: 'Portfolio',
        components: {
            PortfolioItems
        }
    }
</script>

<style scoped>
    .portfolio-block{
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding: 1em;

        border: 2px solid brown;
        border-radius: 3px;
        background-color: #f3f3f3;
    }
    .portfolio-block__portfolio-header{
        margin-top: 0.25em;
        font-size: 2.2em;
        font-weight: normal;
        color: brown;
    }
    .portfolio-block__all-works-button{
        display: inline-block;
        box-sizing: border-box;
        padding: 0.75em;

        border: 1px solid #5e6772;
        border-radius: 3px;
        background-color: #83d2d5;

        font-size: 1.5rem;
        color: #f1f9fa;
        text-decoration: none;
    }
    .portfolio-block__all-works-button:hover{
        transition-duration: 0.45s;
        color: #5e6772;
        background-color: #f1f9fa;
        box-shadow: 0 8px 20px 0 rgba(0,0,0,0.3);
    }
    .portfolio-block__all-works-button:active{
        transition-duration: 0.35s;
        box-shadow: 0 8px rgba(0,0,0,0.4);
        transform: translateY(8px);
    }

    @media screen and (min-width: 1025px) and (max-width: 2560px),
           screen and (min-width: 2561px){
        .portfolio-block__portfolio-header{
            font-size: 3em;
        }
        .portfolio-block__all-works-button{
            font-size: 1.75em;
        }
    }
</style>


