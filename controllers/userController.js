import routes from "../routes";

export const getJoin = (req, res) =>
 res.render("join", { pageTitle:"Join" });

export const postJoin = (req, res) => {
    console.log(req.body)
    const {
        body: { name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400)
        res.render("join", { pageTitle:"Join" });
    } else {
        //To Do: Register User(사용자 등록)
        //To Do: Log User in (사용자 로그인)
        res.redirect(routes.home);
    }
}
 


export const getLogin = (req, res) =>
 res.render("login", { pageTitle:"Log In" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    // To Do: Process Log Out
 res.render("logout", {pageTitle:"logout"});
 
 
}
export const users = (req, res) =>
 res.render("users", { pageTitle:"Users" });
export const userDetail = (req, res) =>
 res.render("userDetail", { pageTitle:"userDetail" });
export const editProfile = (req, res) => 
res.render("editProfile", { pageTitle:"Edit Profile" });
export const changePassword = (req, res) =>
 res.render("changePassword", { pageTitle:"Change Password"});