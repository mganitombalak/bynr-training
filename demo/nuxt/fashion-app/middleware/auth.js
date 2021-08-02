export default function (context) {
  if (process.client) {
    if (!context.store.getters['auth/isLogged']) {
      let currentUser = JSON.parse(localStorage?.getItem("user"));
      if (currentUser) {
        context.store.commit("auth/setAlreadyAuthenticatedUser", { userInfo: currentUser });
      } else {
        context.redirect('/auth/login');
      }
    }
  }
}
