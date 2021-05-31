const authMutations={
    login(context,payload){
        context.isLogged=payload.loginStatus;
        context.userInfo=payload.userInfo;
        context.notAllowedPages=payload.userInfo.notAllowedPages;
        localStorage.setItem('user',payload.userInfo);
    },
    logout(context){
        context.isLogged=false;
        context.userInfo=null;
        localStorage.removeItem('user');
    }

}

export default authMutations;