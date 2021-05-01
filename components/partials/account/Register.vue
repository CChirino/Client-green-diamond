<template lang="html">
    <form @submit.prevent="handleSubmit">
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
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="form.email"
                    placeholder="Email"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="form.email_verified_at"
                    placeholder="Email Confirmation"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="form.password"
                    placeholder="Password"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmit"
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
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
export default {
    data() {
        return {
            form:{
                name: '',
                email: '',
                email_verified_at: '',
                password: '',
            }
        };
    },
    validations: {
        name: { required },
        password: { required },
        email: { required }
    },
    methods: {
      async handleSubmit(e) {
        try {
          e.preventDefault();
          let errors = [];
          console.log(this.form)
          await this.$axios.$get('sanctum/csrf-cookie');
          await this.$axios.post('http://207.244.228.155/api/register', {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
            email_verified_at: this.form.email_verified_at,
          }).then(function (resp) {
              console.log(resp)
          }).catch(function (err) {
            if (err.response.status = 422) {
              errors = err.response.data.errors;
            }
          });
          this.errors = errors;
        } catch (e) {
          console.log(e)
        }
      }
    }
};
</script>

<style lang="scss" scoped></style>