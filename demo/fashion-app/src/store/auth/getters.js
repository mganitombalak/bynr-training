const authGetters = {
    getFullName(context){
        return context.userInfo&&context.userInfo!==null?`${context.userInfo.firstName} ${context.userInfo.surName}`:'Not Auth Info'
    },
    getNotAllowedPages(context){
        return context.notAllowedPages;
    },
    isLogged(context){
        return context.isLogged;
    }
}

export default authGetters;