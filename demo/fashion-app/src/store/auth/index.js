import authActions from './actions';
import authMutations from './mutations';
import authGetters from './getters';

const authModule = {
    namespaced:true,
    state(){
        return { 
            isLogged:false,
            userInfo:null,
            notAllowedPages:[]
        }
    },
    actions:authActions,
    mutations:authMutations,
    getters:authGetters
    // modules:{}    
};

export default authModule;