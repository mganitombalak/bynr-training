export default function(context){
  console.log();
  if(!context.store.getters['auth/isLogged']){
    context.redirect('/auth/login');
  }
}
