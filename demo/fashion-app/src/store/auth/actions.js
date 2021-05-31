import AuthService from '../../services/auth'

const authActions = {
    login(context,payload) {
        let authService = new AuthService();
        let result= authService.login(payload.username,payload.password);
        context.commit('login',{loginStatus:result.status,userInfo:result.userInfo});
    },
    logout(context) { 
        context.commit('logout');
    }
}
export default authActions;