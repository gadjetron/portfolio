<template>
    <div class="portfolio-item">
        <img src="../../assets/portfolio_item_placeholder.jpg" alt="" class="portfolio-item__image">
    </div>
</template>

<script>
    export default {
        name: 'PortfolioItem'
    }
</script>

<style scoped>
    .portfolio-item{
        display: flex;
        align-items: stretch;
        box-sizing: border-box;

        background-color: #4d4d4d10;
        border: 5px solid white;
        border-radius: 10px;

        font-size: 1.4rem;
        color: black;
        box-shadow: 0 6px 15px rgba(0.6, 0.4, 0.4, 0.18),
                    0 -6px 15px rgba(0.6, 0.4, 0.4, 0.18),
                    6px 0 15px rgba(0.6, 0.4, 0.4, 0.18),
                    -6px 0 15px rgba(0.6, 0.4, 0.4, 0.18);
    }
    .portfolio-item__image{
        display: inline-flex;
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: 769px) and (max-width: 1160px){
        .portfolio-item:last-child{
            grid-column: 2 / 3;
        }
    }
    @media screen and (min-width: 1161px) and (max-width: 1760px){
        .portfolio-item:nth-last-child(2){
            grid-column: 2 / 3;
        }
    }
</style>

