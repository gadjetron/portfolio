<template>
    <div class="team-block">
        <h1 class="team-block__header">The Team</h1>
        <TeamMembers></TeamMembers>
    </div>
</template>

<script>
    import TeamMembers from "./TeamMembers.vue";

    export default {
        name: 'Team',
        components: {
            TeamMembers
        }
    }
</script>

<style scoped>
    .team-block{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
    }
    .team-block__header{
        margin-top: 0.25em;
        color: #5f6ffd;
        font-size: 2.3em;
        font-weight: normal;
    }
</style>
