<template>
    <div class="team-member">
        <div class="team-member__member-photo-block">
            <img class="member-photo-block__member-photo"
                 src="../../assets/team_member_photo_placeholder.png"
                 alt="Member photo">
        </div>
        <div class="team-member__member-short-info">
            <h2 class="member-short-info__full-name">
                {{this.$props.team_member_info.full_name}}
            </h2>
            <h3 class="member-short-info__job">
                {{this.$props.team_member_info.job}}
            </h3>
        </div>
        <div class="team-member__member-socials">
            <a href="">
                <logo-facebook-icon w="3.5em" h="3.5em" style="color: #566ca3;"/>
            </a>
            <a href="">
                <logo-twitter-icon w="3.5em" h="3.5em" style="color: #7ccbf2;" />
            </a>
            <a href="">
                <logo-googleplus-icon w="3.5em" h="3.5em" style="color: #d36555;" />
            </a>
        </div>
    </div>
</template>

<script>
    import LogoTwitterIcon from "vue-ionicons/dist/logo-twitter.vue"
    import LogoGoogleplusIcon from "vue-ionicons/dist/logo-googleplus.vue"
    import LogoFacebookIcon from "vue-ionicons/dist/logo-facebook.vue"

    export default {
        name: 'TeamMember',
        props: ['team_member_info'],
        components: {
            LogoTwitterIcon,
            LogoGoogleplusIcon,
            LogoFacebookIcon
        }
    }
</script>

<style scoped>
    .team-member{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 0.3em;
        border: 3px solid black;
        border-radius: 10px;
    }
    .team-member__member-photo-block{
        display: flex;
        justify-content: center;
    }
    .member-photo-block__member-photo{
        display: inline-flex;
        height: 100%;
    }
    .team-member__member-short-info{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .member-short-info__full-name{
        margin-bottom: 0.5em;
    }
    .member-short-info__job{
        margin-top: 0;
    }
    .member-short-info__full-name,
    .member-short-info__job{
        font-weight: normal;
    }
    .team-member__member-socials{
        display: flex;
        justify-content: space-evenly;
    }
</style>
