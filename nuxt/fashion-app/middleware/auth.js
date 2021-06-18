export default function (context) {
  console.log('triggered');
  context.store.commit("auth/setAlreadyAuthenticatedUser");
}
