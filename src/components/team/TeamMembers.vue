<template>
    <div class="team-members">
        <TeamMember :team_member_info="team_member" :key="team_member.full_name"
                    v-for="team_member in team_members">
        </TeamMember>
    </div>
</template>

<script>
    import TeamMember from "./TeamMember.vue";

    export default {
        name: 'TeamMembers',
        data () {
            return {
                team_members: [
                    {
                        full_name: "Adrian Thomas",
                        job: "CEO & Founder",
                    },
                    {
                        full_name: "Narate Ketram",
                        job: "Creative Director",
                    },
                    {
                        full_name: "Fernando Comet",
                        job: "CEO & Founder",
                    },
                    {
                        full_name: "Adedayo Saheed",
                        job: "Creative Director",
                    }
                ]
            }
        },
        components: {
            TeamMember
        }
    }
</script>

<style scoped>
    .team-members{
        display: grid;
        grid-template-areas: "tm tm tm tm";  /* 'tm' - team member */
        align-self: stretch;
        justify-content: space-around;
        gap: 0.5em;
        padding-top: 1em;
    }

    @media screen and (max-width: 375px){
        .team-members{
            grid-template-areas: "tm"
                                 "tm"
                                 "tm"
                                 "tm";
            justify-content: stretch;
        }
    }
    @media screen and (min-width: 376px) and (max-width: 690px){
        .team-members{
            grid-template-areas: "tm tm"
                                 "tm tm";
        }
    }
    @media screen and (min-width: 426px) and (max-width: 690px),
           screen and (min-width: 1161px){
        .team-members{
            align-self: center;
        }
    }
</style>
