export default class AuthService {
    login(username, password) {
        return {
            status: username === "admin" && password === "123",
            userInfo: {
                userName:'mgani.tombalak@yahoo.com',
                firstName:'Mehmet Gani',
                surName:'Tombalak',
                notAllowedPages:['shop']
            }
        };
    }
}