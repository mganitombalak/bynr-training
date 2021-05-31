<template>
  <div class="register-login-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="login-form">
            <h2>Login</h2>
            <form @submit.prevent="onSubmitHandler">
              <div class="group-input">
                <label for="username">Username or email address *</label>
                <input type="email" id="username" v-model="username" required/>
              </div>
              <div class="group-input">
                <label for="pass">Password *</label>
                <input type="password" id="pass" v-model="password" required/>
              </div>
              <div class="group-input gi-check">
                <div class="gi-more">
                  <label for="save-pass">
                    Save Password
                    <input type="checkbox" id="save-pass" />
                    <span class="checkmark"></span>
                  </label>
                  <a href="#" class="forget-pass">Forget your Password</a>
                </div>
              </div>
              <button type="submit" class="site-btn login-btn">Sign In</button>
            </form>
            <div class="switch-login">
              <a href="./register.html" class="or-login"
                >Or Create An Account</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            password:'',
        }
    },
    computed:{
        isFormValid(){
            return this.username !=='' && this.password !== '' & this.username.includes('@');
        }
    },
    methods:{
        onSubmitHandler(){
            if(this.isFormValid){
                console.log('form can be submited');
            } else
            {
                console.log('form has errors.');
            }
        }
    }
}
</script>
