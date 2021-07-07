<template lang="html">
    <form >
        <div class="ps-form__content">
            <h5>Log In Your Account</h5>
            <!-- <div class="form-group">
                <label for="username">Email</label>
                <input  v-model="form.email" id="email" class="ps-text-field">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="form.password" id="password" class="ps-text-field">
            </div>
            <div class="form-group">
                <v-checkbox label="Remember me" color="warning" />
            </div> -->
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmit"
                >
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
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    middleware: ["authentication"],
    name: 'Login',
    data() {
        return {
            form: {
                email:'christian@mail.com',
                password:'123456',
                }
        };
    },
    methods: {
    handleSubmit() {
                this.$store.dispatch('login/setIsLoggedIn', true);
                this.$router.push('/');
        }
    // login() {
    //   this.$auth
    //     .loginWith("laravelSanctum", {
    //       data: this.form
    //     })
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error));
    // }
    }
};
</script>

<style lang="scss" scoped></style>
