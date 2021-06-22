import AuthService from '../services/auth';

export const state = () => ({
  isLogged: false,
  userInfo: null
});

export const mutations = {
  login(context, payload) {
    context.isLogged = payload.loginStatus;
    context.userInfo = payload.userInfo;
    localStorage.setItem('user', JSON.stringify(payload.userInfo));
  },
  logout(context) {
    context.isLogged = false;
    context.userInfo = null;
    localStorage.removeItem('user');
  },
  setAlreadyAuthenticatedUser(context,payload) {
    context.isLogged = true;
    context.userInfo = payload.userInfo;
  }
}

export const actions = {
  login(context, payload) {
    // return new Promise((res,rej)=>{
    //   let result = authService.login(payload.userName, payload.password);
    //   context.commit('login', { loginStatus: result.status, userInfo: result.userInfo });
    //   return result.status? res():rej();
    // });
    let result = new AuthService.login(payload.userName, payload.password);
    context.commit('login', { loginStatus: result.status, userInfo: result.userInfo });
    return result.status ? Promise.resolve() : Promise.reject();

  },
  logout(context) {
    context.commit('logout');
  }

}

export const getters = {
  getFullName(context) {
    return context.userInfo && context.userInfo !== null ? `${context.userInfo.firstName} ${context.userInfo.surName}` : 'Not Auth Info'
  },
  isLogged(context) {
    return context.isLogged;
  }
}

