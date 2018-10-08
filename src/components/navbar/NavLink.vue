<template>
    <div class="nav-link-block">
        <slot name="url"></slot>
        <div class="nav-link-block__link-underliner"></div>
    </div>
</template>

<script>
    export default {
        name: 'NavLink',
    }
</script>

<style scoped>
    .nav-link-block{
        display: flex;
        flex: 1;
        flex-direction: column;
        box-sizing: border-box;
    }
    .nav-link-block__nav-link{
        display: inline-flex;
        flex: 9;
        align-items: center;
        justify-content: center;

        color: #5c5f68;
        font-size: 1.4rem;
        text-decoration: none;

        margin-bottom: 3px;
        padding: 0 0.5em;
    }
    .nav-link-block__nav-link:hover{
        border-radius: 3px;
        background-color: #3a4759;

        color: gold;
        transition: color 0.75s;
    }
    .nav-link-block__link-underliner{
        flex: 1;
    }
    .nav-link-block:hover .nav-link-block__link-underliner{
        background-color: #83d2d5;
        border-radius: 0 3px;

        transition: 0.75s;
    }

    @media screen and (max-width: 425px){
        .nav-link-block__nav-link{
            padding: 0.7em 0;
            margin-bottom: 0;
            letter-spacing: 1px;
        }
        .nav-link-block__link-underliner{
            display: none;
        }
    }
</style>
