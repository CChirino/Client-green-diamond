<template lang="html">
    <form  @submit.prevent="login()">
        <div class="ps-form__content">
            <h5>Log In Your Account</h5>
            <div class="form-group">
                <v-text-field
                    class="ps-text-field"
                    :error-messages="usernameErrors"
                    v-model="login_data.email"
                    placeholder="Usernamer or email"
                    height="50"
                    outlined
                />
            </div>
            <div class="form-group">
                <v-text-field
                    type="password"
                    class="ps-text-field"
                    :error-messages="passwordErrors"
                    v-model="login_data.password"
                    placeholder="Please enter password"
                    height="50"
                    outlined
                />
            </div>
            <div class="form-group">
                <v-checkbox label="Remember me" color="warning" />
            </div>
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
    name: 'Login',
    computed: {
        usernameErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            !this.$v.username.required && errors.push('This field is required');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('This field is required');
            return errors;
        }
    },
    data() {
        return {
            login_data: {
              email: '',
              password: ''
            },
        };
    },
    validations: {
        username: { required },
        password: { required }
    },
    methods: {
        name: "login",
        layout: "login",
        methods: {
          login() {
            this.validation_errors = [];
            this.error_message = '';
            this.$axios.$post('api/login', this.login_data).then(response => {
              this.$router.push('/');
            }).catch(error => {
              this.error_message = error.response.data.message;
              if(error.response.data.errors) {
                for(let key in error.response.data.errors) {
                  this.validation_errors.push(error.response.data.errors[key][0]);
                }
              }
            });
          }
        }
    }
};
</script>

<style lang="scss" scoped></style>
