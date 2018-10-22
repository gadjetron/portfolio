<template>
    <div class="contact-form-wrapper" id="contact_us">
        <h1 class="contact-form-wrapper__header">Contact Us</h1>

        <form action="/contact_us" method="post" class="contact-form"
              @submit.prevent="onFormSubmit">

            <input type="text" name="user_name" placeholder="  Name"
                class="contact-form__input-name contact-form__input"
                v-model="form_data.user_name">

            <input type="email" name="user_email" placeholder="  E-mail"
                class="contact-form__input-email contact-form__input"
                v-model="form_data.user_email">

            <textarea name="user_message" cols="30" rows="15" placeholder=" Message"
                    class="contact-form__input-message contact-form__input"
                    v-model="form_data.user_message">
            </textarea>

            <button type="submit" class="contact-form__send-button">
                Send
            </button>
        </form>

        <h2 style="color: white; align-self: center;
                   margin-bottom: 0; font-weight: normal;">
            We in social nets:
        </h2>
        <div class="social-links">
            <a href="">
                <logo-facebook-icon w="3.5em" h="3.5em" style="fill: #566ca3;"/>
            </a>
            <a href="">
                <logo-twitter-icon w="3.5em" h="3.5em" style="fill: #7ccbf2;"/>
            </a>
            <a href="">
                <logo-googleplus-icon w="3.5em" h="3.5em" style="fill: #d36555;"/>
            </a>
        </div>
    </div>
</template>

<script>
    import LogoTwitterIcon from "vue-ionicons/dist/logo-twitter.vue"
    import LogoFacebookIcon from "vue-ionicons/dist/logo-facebook.vue"
    import LogoGoogleplusIcon from "vue-ionicons/dist/logo-googleplus.vue"

    export default {
        name: 'ContactForm',
        data () {
            return {
                form_data: {
                    user_name: '',
                    user_email: '',
                    user_message: ''
                }
            }
        },
        methods: {
            onFormSubmit() {
                return;
            }
        },
        components: {
            LogoFacebookIcon,
            LogoTwitterIcon,
            LogoGoogleplusIcon
        }
    }
</script>

<style scoped>
    .contact-form-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
        border-radius: 3px;
        border: 2px solid orange;
        background-color: #5c5252;
    }
    .contact-form-wrapper__header{
        margin-top: 0.2em;
        font-weight: normal;
        color: white;
    }
    .contact-form{
        align-self: stretch;
        display: grid;
        grid-template-areas: "user_name"
                             "user_email"
                             "user_message"
                             "send_button";
    }
    .contact-form__input{
        margin: 0.5em;
        resize: none;
        border: 3px solid #7ccbf2;
        border-radius: 5px;
    }
    .contact-form__input:focus{
        border: 3px solid #d36555;
    }
    .contact-form__input-name{
        grid-area: user_name;
    }
    .contact-form__input-email{
        grid-area: user_email;
    }
    .contact-form__input-name,
    .contact-form__input-email{
        height: 3.3em;
    }
    .contact-form__input-message{
        grid-area: user_message;
    }
    .contact-form__send-button{
        grid-area: send_button;
        justify-self: center;
        padding: 0.5em 0.75em;
        margin-top: 0.375em;

        border: 1px solid #5e6772;
        border-radius: 3px;
        background-color: #83d2d5;

        color: #f1f9fa;
        font-size: 1.5rem;
        text-align: center;
        text-decoration: none;
    }
    .contact-form__send-button:hover{
        cursor: pointer;
        transition-duration: 0.45s;

        color: #5e6772;
        border-color: black;
        background-color: #f1f9fa;
        box-shadow: 0 8px 20px 0 rgba(255,255,255,0.6);
    }
    .contact-form__send-button:active{
        transition-duration: 0.35s;
        box-shadow: 0 8px rgba(0,0,0,0.4);
        transform: translateY(8px);
    }
    .social-links{
        display: flex;
        margin-top: 0.75em;
        padding: 0.5em;
        border-radius: 10px;
        background-color: whitesmoke;
    }

    @media screen and (min-width: 426px){
        .contact-form{
            align-self: auto;
        }
    }
    @media screen and (min-width: 426px) and (max-width: 866px){
        .contact-form{
            width: 75%;
        }
    }
    @media screen and (min-width: 867px) and (max-width: 1024px){
        .contact-form{
            width: 62.5%;
        }
    }
    @media screen and (min-width: 1025px){
        .contact-form{
            width: 50%;
        }
    }
    @media screen and (min-width: 1441px){
        .contact-form{
            width: 37.5%;
        }
    }
    @media screen and (min-width: 2151px),
           screen and (min-width: 2561px){
        .contact-form{
            width: 25%;
        }
    }
    @media screen  and (min-width: 769px) and (max-width: 1024px),
           screen and (min-width: 1161px) and (max-width: 1440px),
           screen and (min-width: 1761px) and (max-width: 2150px),
           screen and (min-width: 2301px) and (max-width: 2560px){
        .contact-form{
            grid-template-areas: "user_name user_email"
                                 "user_message user_message"
                                 "send_button send_button";
        }
    }
</style>
