<template>
    <div class="navbar-brand">
        <a href="/" class="navbar-brand__link">
            <img class="navbar-brand__author-brand"
                 src="../../assets/author_brand.png"
                 alt="Author Brand">
        </a>
    </div>
</template>

<script>
    export default {
        name: 'AuthorBrand'
    }
</script>

<style scoped>
    .navbar-brand{
        display: flex;
    }
    .navbar-brand__link{
        display: inline-flex;
        align-items: stretch;
    }
    .navbar-brand__author-brand{
        width: 120px;
    }

    @media screen and (max-width: 425px){
        .navbar-brand{
            justify-content: center;
        }
    }
</style>
