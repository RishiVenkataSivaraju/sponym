module.exports.isLoggedIn = (req,res,next) =>{
    console.log(req.path,req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
       return  res.redirect('/login',{msg:req.flash()})
    }
    else{
        next();
    }
}
module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}