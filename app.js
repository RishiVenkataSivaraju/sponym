const express = require('express');
const app = express();
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
// const localStrategy=require("passport-local")
const GoogleStrategy = require("passport-google-oauth20")
const session = require("express-session")
const mongoose = require('mongoose');
const methodOverride = require("method-override")
const cookie = require('cookie-session')
const path = require("path");
const flash = require("connect-flash")
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'pubilc')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'module')));
const User = require("./module/loginSignupSchema")
const GUser = require("./module/GoogleSchema")
// app.use(express.static(path.join(__dirname,'views')))
mongoose.connect('mongodb://127.0.0.1:27017/subjectdb')
    .then(data => {
        console.log('CONNECTION OPEN')
    })
    .catch(err => {
        console.log(err)
    })
const MongoStore = require('connect-mongo')
const store = MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/subjectdb',
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: 'thisshouldbeabettersecret!'
    }
});
app.use(flash())
const sesseionConfig = {
    store,
    secret: "thisisasecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 60 * 60 * 1000 * 24 * 7,
        maxAge: 60 * 60 * 1000 * 24 * 7
    }
}
const Subject = require('./module/subjectSchema');
const passport = require("passport")
const localStrategy = require("passport-local")
app.use(session(sesseionConfig))
passport.serializeUser((user, done) => {
    done(null, user.id);
})
passport.deserializeUser(User.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
}))
// passport.deserializeUser(GUser.deserializeGUser())
// passport.serializeUser(GUser.serializeGUser())
// passport.use(new GoogleStrategy(GUser.authenticate()))
passport.use(new localStrategy(User.authenticate()))
app.use(flash())
const { isLoggedIn } = require("./middleware")
const { storeReturnTo } = require("./middleware");
// const cookieSession = require('cookie-session');

// app.use(cookieSession({
// maxAge:24*60*60*1000,
// keys:[process.env.COOKIE_KEY]
// }))
app.use(passport.initialize())
app.use(passport.session())
// app.use((req, res, next) => {
// console.log(req.session)
// res.locals.currentUser = req.user;
// res.locals.success = req.flash('success');
// res.locals.error = req.flash('error');
//     next();
// })
// const sesseionConfig={
// store,
//     secret:"thisisasecret",
//     resave:false,
//     saveUninitialized:true,
//     cookie:{
//         httpOnly:true,
//         expires:Date.now()+60*60*1000*24*7,
//         maxAge:60*60*1000*24*7
//     }
// }
// app.use(session(sesseionConfig))



// app.get("/",(req,res) =>{
// res.render("getin");
// })
app.get("/home", (req, res) => {
    res.render("home")
})
app.get("/semester", (req, res) => {
    res.render("Semesters");
})
app.get("/about", (req, res) => {
    res.render("about");
})
// Years and Semester
app.get("/1-1", (req, res) => {
    res.render("11")
})
app.get("/1-2", (req, res) => {
    res.render("12")
})
app.get("/2-1", (req, res) => {
    res.render("21")
})
app.get("/2-2", (req, res) => {
    res.render("22")
})
app.get("/3-1", (req, res) => {
    res.render("31")
})
app.get("/3-2", (req, res) => {
    res.render("32")
})
app.get("/4-1", (req, res) => {
    res.render("41")
})
app.get("/4-2", (req, res) => {
    res.render("42")
})

//cse
app.get("/cse11", (req, res) => {
    res.render("cse(11)")
})
app.get("/cse12", (req, res) => {
    res.render("cse(12)")
})
app.get("/cse21", (req, res) => {
    res.render("cse(21)")
})
app.get("/cse22", (req, res) => {
    res.render("cse(22)")
})
app.get("/cse31", (req, res) => {
    res.render("cse(31)")
})
app.get("/cse32", (req, res) => {
    res.render("cse(32)")
})
app.get("/cse41", (req, res) => {
    res.render("cse(41)")
})
app.get("/cse42", (req, res) => {
    res.render("cse(42)")
})
//ece
app.get("/ece11", (req, res) => {
    res.render("ece(11)")
})
app.get("/ece12", (req, res) => {
    res.render("ece(12)")
})
app.get("/ece21", (req, res) => {
    res.render("ece(21)")
})
app.get("/ece22", (req, res) => {
    res.render("ece(22)")
})
app.get("/ece31", (req, res) => {
    res.render("ece(31)")
})
app.get("/ece32", (req, res) => {
    res.render("ece(32)")
})
app.get("/ece41", (req, res) => {
    res.render("ece(41)")
})
app.get("/ece42", (req, res) => {
    res.render("ece(42)")
})

//eee
app.get("/eee11", (req, res) => {
    res.render("eee(11)")
})
app.get("/eee12", (req, res) => {
    res.render("eee(12)")
})
app.get("/eee21", (req, res) => {
    res.render("eee(21)")
})
app.get("/eee22", (req, res) => {
    res.render("eee(22)")
})
app.get("/eee31", (req, res) => {
    res.render("eee(31)")
})
app.get("/eee32", (req, res) => {
    res.render("eee(32)")
})
app.get("/eee41", (req, res) => {
    res.render("eee(41)")
})
app.get("/eee42", (req, res) => {
    res.render("eee(42)")
})
//civil
app.get("/civil11", (req, res) => {
    res.render("civil(11)")
})
app.get("/civil12", (req, res) => {
    res.render("civil(12)")
})
app.get("/civil21", (req, res) => {
    res.render("civil(21)")
})
app.get("/civil22", (req, res) => {
    res.render("civil(22)")
})
app.get("/civil31", (req, res) => {
    res.render("civil(31)")
})
app.get("/civil32", (req, res) => {
    res.render("civil(32)")
})
app.get("/civil41", (req, res) => {
    res.render("civil(41)")
})
app.get("/civil42", (req, res) => {
    res.render("civil(42)")
})

//mech
app.get("/mech11", (req, res) => {
    res.render("mech(11)")
})
app.get("/mech12", (req, res) => {
    res.render("mech(12)")
})
app.get("/mech21", (req, res) => {
    res.render("mech(21)")
})
app.get("/mech22", (req, res) => {
    res.render("mech(22)")
})
app.get("/mech31", (req, res) => {
    res.render("mech(31)")
})
app.get("/mech32", (req, res) => {
    res.render("mech(32)")
})
app.get("/mech41", (req, res) => {
    res.render("mech(41)")
})
app.get("/mech42", (req, res) => {
    res.render("mech(42)")
})

//SUBJECTS 

//cse
app.get("/cds", (req, res) => {
    res.render("cds")
})
app.get("/che", (req, res) => {
    res.render("che")
})
app.get("/beee", (req, res) => {
    res.render("beee")
})
app.get("/lac", (req, res) => {
    res.render("lac")
})
app.get("/pds", (req, res) => {
    res.render("pds")
})
app.get("/ap", (req, res) => {
    res.render("ap")
})
app.get("/ps", (req, res) => {
    res.render("ps")
})
app.get("/ce", (req, res) => {
    res.render("ce")
})
app.get("/ed", (req, res) => {
    res.render("ed")
})
app.get("/dmgt", (req, res) => {
    res.render("dmgt")
})
app.get("/demp", (req, res) => {
    res.render("demp")
})
app.get("/ads", (req, res) => {
    const ads1 = "ADS1.pdf"
    res.render("ads", { ads1 })
})
app.get("/oopj", (req, res) => {
    res.render("oopj")
})
app.get("/co", (req, res) => {
    res.render("co")
})
app.get("/dssm", (req, res) => {
    res.render("dssm")
})
app.get("/dbms", (req, res) => {
    res.render("dbms")
})
app.get("/os", (req, res) => {
    res.render("os")
})
app.get("/se", (req, res) => {
    res.render("se")
})
app.get("/mefa", (req, res) => {
    res.render("mefa")
})
app.get("/ai", (req, res) => {
    res.render("ai")
})
app.get("/flat", (req, res) => {
    res.render("flat")
})
app.get("/cn", (req, res) => {
    res.render("cn")
})
app.get("/spm", (req, res) => {
    res.render("spm")
})
app.get("/bt", (req, res) => {
    res.render("bt")
})
app.get("/cd", (req, res) => {
    res.render("cd")
})
app.get("/ml", (req, res) => {
    res.render("ml")
})
app.get("/iot", (req, res) => {
    res.render("iot")
})
app.get("/iot", (req, res) => {
    res.render("iot")
})
app.get("/st", (req, res) => {
    res.render("st")
})
app.get("/vlsi", (req, res) => {
    res.render("vlsi")
})
app.get("/uhv", (req, res) => {
    res.render("uhv")
})


//ece
app.get("/fec", (req, res) => {
    res.render("fec")
})
app.get("/devc", (req, res) => {
    res.render("devc")
})
app.get("/edc", (req, res) => {
    res.render("edc")
})
app.get("/es", (req, res) => {
    res.render("es")
})
app.get("/cvt", (req, res) => {
    res.render("cvt")
})
app.get("/ss", (req, res) => {
    res.render("ss")
})
app.get("/ee", (req, res) => {
    res.render("ee")
})
app.get("/ac", (req, res) => {
    res.render("ac")
})
app.get("/cse", (req, res) => {
    res.render("cse")
})
app.get("/dsp", (req, res) => {
    res.render("dsp")
})
app.get("/mpmc", (req, res) => {
    res.render("mpmc")
})
app.get("/emi", (req, res) => {
    res.render("emi")
})
app.get("/ame", (req, res) => {
    res.render("ame")
})
app.get("/cmn", (req, res) => {
    res.render("cmn")
})
app.get("/ptsp", (req, res) => {
    res.render("ptsp")
})
app.get("/dld", (req, res) => {
    res.render("dld")
})
app.get("/emtl", (req, res) => {
    res.render("emtl")
})
app.get("/cs", (req, res) => {
    res.render("cs")
})
app.get("/ldic", (req, res) => {
    res.render("ldic")
})
app.get("/ob", (req, res) => {
    res.render("ob")
})

//eee
app.get("/nmpt", (req, res) => {
    res.render("nmpt")
})
app.get("/psc", (req, res) => {
    res.render("psc")
})
app.get("/ms", (req, res) => {
    res.render("ms")
})
app.get("/psa", (req, res) => {
    res.render("psa")
})
app.get("/dcmt", (req, res) => {
    res.render("dcmt")
})
app.get("/sgp", (req, res) => {
    res.render("sgp")
})
app.get("/eca", (req, res) => {
    res.render("eca")
})
app.get("/aec", (req, res) => {
    res.render("aec")
})
app.get("/pe", (req, res) => {
    res.render("pe")
})
app.get("/dcp", (req, res) => {
    res.render("dcp")
})
app.get("/acm", (req, res) => {
    res.render("acm")
})
app.get("/eft", (req, res) => {
    res.render("eft")
})
app.get("/dti", (req, res) => {
    res.render("dti")
})
app.get("/hvdc", (req, res) => {
    res.render("hvdc")
})
app.get("/cos", (req, res) => {
    res.render("cos")
})
app.get("/psac", (req, res) => {
    res.render("psac")
})

//civil
app.get("/ep", (req, res) => {
    res.render("ep")
})
app.get("/ec", (req, res) => {
    res.render("ec")
})
app.get("/som", (req, res) => {
    res.render("som")
})
app.get("/psfc", (req, res) => {
    res.render("psfc")
})
app.get("/asm", (req, res) => {
    res.render("asm")
})
app.get("/fmhm", (req, res) => {
    res.render("fmhm")
})
app.get("/s", (req, res) => {
    res.render("s")
})
app.get("/mmot", (req, res) => {
    res.render("mmot")
})
app.get("/eg", (req, res) => {
    res.render("eg")
})
app.get("/sa", (req, res) => {
    res.render("sa")
})
app.get("/ct", (req, res) => {
    res.render("ct")
})
app.get("/eve", (req, res) => {
    res.render("eve")
})
app.get("/drcs", (req, res) => {
    res.render("drcs")
})
app.get("/ge", (req, res) => {
    res.render("ge")
})
app.get("/bmc", (req, res) => {
    res.render("bmc")
})
app.get("/sa2", (req, res) => {
    res.render("sa2")
})
app.get("/dss", (req, res) => {
    res.render("dss")
})
app.get("/he", (req, res) => {
    res.render("he")
})
app.get("/hie", (req, res) => {
    res.render("hie")
})
app.get("/esa", (req, res) => {
    res.render("esa")
})
app.get("/bpa", (req, res) => {
    res.render("bpa")
})
app.get("/camd", (req, res) => {
    res.render("camd")
})
//mech
app.get("/mse", (req, res) => {
    res.render("mse")
})
app.get("/at", (req, res) => {
    res.render("at")
})
app.get("/cvtape", (req, res) => {
    res.render("cvtape")
})
app.get("/mp", (req, res) => {
    res.render("mp")
})
app.get("/kom", (req, res) => {
    res.render("kom")
})
app.get("/mt", (req, res) => {
    res.render("mt")
})
app.get("/mm", (req, res) => {
    res.render("mm")
})
app.get("/tds", (req, res) => {
    res.render("tds")
})
app.get("/cadcam", (req, res) => {
    res.render("cadcam")
})
app.get("/dmm", (req, res) => {
    res.render("dmm")
})
app.get("/mm2", (req, res) => {
    res.render("mm2")
})
app.get("/ar", (req, res) => {
    res.render("ar")
})
app.get("/dm", (req, res) => {
    res.render("dm")
})
app.get("/fem", (req, res) => {
    res.render("fem")
})
app.get("/ht", (req, res) => {
    res.render("ht")
})
app.get("/ndt", (req, res) => {
    res.render("ndt")
})
app.get("/camd", (res, req) => {
    res.render("camd")
})


app.get("/syllabus", (req, res) => {
    res.render("syllabus");
})
app.get("/allsubjects", (req, res) => {
    res.render("allsubjects");
})


// Search Routes for subjects

app.post("/search", async (req, res) => {
    const serachvalue = req.body.search.toLowerCase().trim();
    console.log(serachvalue)
    // // await Subject.findOneAndDelete({jntuaCode:"20a52302*****"})
    // const ob = new Subject({
    // subjectName:"organistational behaviour",
    // subjectCode:'ob',
    // jntuaCode:"20a52302"
    // })
    // ob.save()

    // for(let i=0;i<subjectName.length;i++){

    // console.log(subjects[i].subjectCode)
    // }
    try {
        if (await Subject.findOne({ subjectName: serachvalue }) === null && await Subject.findOne({ subjectCode: serachvalue }) === null) {
            console.log("jntua")
            const subject = await Subject.findOne({ jntuaCode: serachvalue })
            res.render(`${subject.subjectCode}`)
        }
        else if (await Subject.findOne({ subjectName: serachvalue }) === null && await Subject.findOne({ jntuaCode: serachvalue }) === null) {
            const subject = await Subject.findOne({ subjectCode: serachvalue })
            res.render(`${subject.subjectCode}`)
        }
        else {
            const subject = await Subject.findOne({ subjectName: serachvalue })
            res.render(`${subject.subjectCode}`)
        }
        // const subjects = await Subject.find()
        // const subs = subjects[0].info
        // const searchIndex = subs.findIndex((sub) => sub.subjectName || sub.jntuaCode == serachvalue.toLowerCase());
        // console.log(`IT Exists Subject Code is:- ${subs[searchIndex].subjectCode}`);
        // const subject = subs[searchIndex].subjectCode.toLowerCase()
        // res.render(`${subject}`)
    }
    catch (e) {
        console.log("notfound")
        res.render("error")
    }
})




//Login and signup routes
app.get("/login", (req, res) => {
    req.app.set("ans", 0)
    res.render("login", { msg: req.flash() })
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup", async (req, res) => {
    const { email, username, password } = req.body
    if (! await User.findOne({ email: email })) {
        const user = new User({ email, username })
        const registerUser = await User.register(user, password)
        res.redirect('/login')
    }
    else {
        res.redirect("/login")
    }
})
app.post("/login", storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: "/login" }), (req, res) => {
    const redirectUrl = res.locals.returnTo || '/';
    console.log(req.user)
    req.flash("welcome", `Welcome Back ${req.user.username}`)
    res.redirect(redirectUrl);
})
app.get("/gsignup", passport.authenticate('google', (req, res) => {
    scope: ['profile']
}))
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `/oauth2/redirect/google`,
    scope: ['profile']
}, (issuer, accessToken, refreshToken, profile, done) => {
    console.log(profile.photos[0].value)
    //check if user already exists in our database
    GUser.findOne({ Google_id: profile.id }).then((currentUser) => {
        //if  user exists
        if (currentUser) {
            done(null, currentUser)
            console.log('user Exists')
        }
        else {
            //not a current user
            const { id, displayName } = profile
            const Google_id = id;
            const UserName = displayName;
            const picture = profile.photos[0].value;
            const guser = new GUser({ Google_id, UserName, picture }).save().then((GUser) => {
                console.log(GUser)
                done(null, GUser)
            })
        }
    })

}))
app.get("/glogin", passport.authenticate('google', (req, res) => {
    scope: ['profile']
}))
//redirect route
app.get("/oauth2/redirect/google", passport.authenticate("google"), async (req, res) => {
    req.app.set('user', req.user)
    if (req.isAuthenticated()) {
        req.app.set("ans", 0)
    }
    if (await GUser.findOne({ UserName: req.user.UserName }) != null) {
        req.flash("welcome", `Welcome ${req.user.UserName}`)
        res.redirect('/')
    }
})
// app.get("/logout", (req, res) => {
//     req.logout();
//     req.redirect('/');

// })
app.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        if (req.isUnauthenticated()) {
            req.app.set("ans", 1)
        }
        req.session.destroy()
        res.redirect('/');
    })
})
app.get("/", (req, res) => {
    const uer = req.app.get('user')
    const an = req.app.get("ans")
    res.render('welcome', { msg: req.flash('welcome'), uer, an });
})

app.get("/updates", async (req, res) => {
    const update = [
        { header: 'JNTUA', title: '2-2 Results', text: 'Result Declared By Jntua For 2-2 Students R20', link: "https://www.jntua.ac.in/" },
        { header: 'JNTUA', title: 'M Tech Recounting', text: 'Recounting Results Declared By Jntua For M Tech Students ', link: 'https://www.jntua.ac.in/' },
        { header: 'JNTUK', title: 'M Tech Recounting', text: 'Recounting Results Declared By Jntua For M Tech Students ', link: 'https://www.jntua.ac.in/' }
    ]
    const len = update.length
    res.render("updates", { update: update, len: len })
})

app.listen(3000, () => {
    console.log("Serving on port 30000");
})







































