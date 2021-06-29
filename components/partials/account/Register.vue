<template lang="html">
    <form v-on:submit.prevent="submitForm">
        <div class="ps-form__content">
            <h5>Register An Account</h5>
            <div class="form-group">
                <v-text-field
                    v-model="form.name"
                    placeholder="Name"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
                <span class="text-danger" v-if="errors.name"> {{errors.name[0]}} </span>
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="form.email"
                    placeholder="Email"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
                <span class="text-danger" v-if="errors.email"> {{errors.email[0]}} </span>
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="form.email"
                    placeholder="Email Confirmation"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
                <span class="text-danger" v-if="errors.email"> {{errors.email[0]}} </span>
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="form.password"
                    placeholder="Password"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
                <span class="text-danger" v-if="errors.password"> {{errors.password[0]}} </span>
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                >
                    Register
                </button>
            </div>
        </div>
        <div class="ps-form__footer">
            <p>Connect with:</p>

            <ul class="ps-list--social">
                <li>
                    <a href="#" class="facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="google">
                        <i class="fa fa-google-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            form:{
                name: '',
                email: '',
                email_verified_at: '',
                password: '',
            },
            errors:{}
        };
    },
    methods: {
    submitForm(){
            axios.post('http://127.0.0.1:8000/api/register', this.form)
                 .then((res) => {
                     //Perform Success Action
                    // 
                window.location.replace("http://localhost:4002/");

                 })
                 .catch((error) => {
                     if(error.response.data){
                         this.errors = error.response.data.errors
                     }
                      console.log(error.response.data)
                 }).finally(() => {
                 });
        }
    }
};
</script>

<style lang="scss" scoped></style>