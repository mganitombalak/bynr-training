<template>
  <div class="register-login-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="login-form">
            <h2>Login</h2>
            <form @submit.prevent="onSubmit">
              <div class="group-input">
                <label for="username">Username or email address *</label>
                <input
                  type="text"
                  id="username"
                  v-model="loginRequest.userName"
                />
              </div>
              <div class="group-input">
                <label for="pass">Password *</label>
                <input
                  type="password"
                  id="pass"
                  v-model="loginRequest.password"
                  required
                />
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
  <!-- <button class="site-btn login-btn">Logout</button> -->
</template>
<script>
export default {
  head() {
    return { title: "Morhipo | Login" };
  },
  data() {
    return {
      loginRequest: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("auth/login", {
          userName: this.loginRequest.userName,
          password: this.loginRequest.password
        })
        .then(() => this.$router.push("/admin"))
        .catch(() => console.log("login failed"));
    }
  }
};
</script>
