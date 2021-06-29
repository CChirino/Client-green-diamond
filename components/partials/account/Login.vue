<template lang="html">
    <form  v-on:submit.prevent="submitForm">
        <div class="ps-form__content">
            <h5>Log In Your Account</h5>
            <div class="form-group">
                <v-text-field
                    class="ps-text-field"
                    height="50"
                    outlined
                    v-model="form.email" type="email" placeholder="Please enter Email"
                />
                <span class="text-danger" v-if="errors.email"> {{errors.email[0]}} </span>
            </div>
            <div class="form-group">
                <v-text-field
                    type="password"
                    class="ps-text-field"
                    placeholder="Please enter password"
                    height="50"
                    outlined
                    v-model="form.password" 
                />
                <span class="text-danger" v-if="errors.password"> {{errors.password[0]}} </span>
            </div>
            <div class="form-group">
                <v-checkbox label="Remember me" color="warning" />
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth">
                    Login
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
    name: 'Login',
    data() {
        return {
            form: {
              email: '',
              password: ''
            },
            errors:{}
        };
    },
    methods: {
        submitForm(){
            axios.post('http://127.0.0.1:8000/api/login', this.form)
                 .then((res) => {
                     //Perform Success Action
                       location.replace("http://localhost:4003/")
                    // location.reload();
                    // console.log(response.data)
                 })
                 .catch(() => {
                 }).finally(() => {
                 });
        }
    }
};
</script>

<style lang="scss" scoped></style>
