require("dotenv").config();
// Dependencies
const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const vhost = require("vhost");
const uuid = require("uuid/v4");
const mongodb = require("mongodb");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcrypt");
const validator = require("email-validator");
const { check, oneOf, validationResult } = require("express-validator/check");
var mongoUtil = require("./utils/mongoUtil");
const fileUpload = require("express-fileupload");
const cron = require("node-cron");
var request = require("request-promise");
var _ = require("lodash");
var url = "mongodb://localhost:27017/mg";
var $ = require("mongo-dot-notation");
var flash = require("express-flash-messages");

mongoUtil.connectToServer(function(err) {
  const db = mongoUtil.getDb();

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  //create server
  const app = express();
  const insecureApp = express();
  app.use(flash());

  function createVirtualHost(domainName, dirPath) {
    return vhost(domainName, express.static(dirPath));
  }

  //Create the virtual hosts
  var meetingGlue = createVirtualHost("meetingglue.com", "meetingGlue");

  //Use the virtual hosts
  app.use(meetingGlue);

  //body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // fileupload middleware
  app.use(
    fileUpload({
      createParentPath: true,
      safeFileNames: true
    })
  );

  // session middleware
  app.use(
    session({
      genid: req => {
        return uuid();
      },
      secret: "fhdklsahfdfjdslkafdsa",
      store: new MongoStore({ url: "mongodb://localhost:27017/mg" }),
      resave: true,
      saveUninitialized: false
    })
  );

  app.locals.ucfirst = function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  app.set("view engine", "pug");
  app.set("views", "./views");
  app.use(express.static("public"));

  var localQuery = require("./utils/localQuery");

  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      var db = mongoUtil.getDb();
      db.collection("users").findOne({ email: email }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );

  // routers
  // routers -> public
  var indexRouter = require("./routes/index");
  var hotelsListRouter = require("./routes/hotelsList");
  var cvbsListRouter = require("./routes/cvbsList");
  var profileHotelRouter = require("./routes/profileHotel");
  var profileCVBRouter = require("./routes/profileCVB");
  var loginRouter = require("./routes/login");
  var registerRouter = require("./routes/register");
  var profileRouter = require("./routes/profile");
  var logoutRouter = require("./routes/logout");
  var eventSearchRouter = require("./routes/eventSearch");

  // routers -> api + utils
  var uploadRouter = require("./routes/upload");
  // routers -> admin
  var adminRouter = require("./routes/admin");
  var adminUserRouter = require("./routes/adminUser");
  var adminHotelsRouter = require("./routes/adminHotels");
  var adminCvbsRouter = require("./routes/adminCvbs");
  var adminUsersRouter = require("./routes/adminUsers");
  var adminHotelRouter = require("./routes/adminHotel");
  var adminCvbRouter = require("./routes/adminCvb");
  var adminUploadCvbRouter = require("./routes/adminUploadCvb");
  var adminUploadHotelRouter = require("./routes/adminUploadHotel");
  var adminStaffRouter = require("./routes/adminStaff");

  // routes
  app.use("/", indexRouter);
  app.use("/admin", adminRouter);
  app.use("/admin/hotels", adminHotelsRouter);
  app.use("/admin/edit/hotel", adminHotelRouter);
  app.use("/admin/edit/cvb", adminCvbRouter);
  app.use("/admin/edit/user", adminUserRouter);
  app.use("/admin/staff", adminStaffRouter);
  app.use("/admin/cvbs", adminCvbsRouter);
  app.use("/admin/users", adminUsersRouter);
  app.use("/admin/edit/cvb/upload", adminUploadCvbRouter);
  app.use("/admin/edit/hotel/upload", adminUploadHotelRouter);
  app.use("/hotels", hotelsListRouter);
  app.use("/cvbs", cvbsListRouter);
  app.use("/hotel", profileHotelRouter);
  app.use("/cvb", profileCVBRouter);
  app.use("/event", eventSearchRouter);
  app.use("/login", loginRouter);
  app.use("/register", registerRouter);
  app.use("/profile", profileRouter);
  app.use("/logout", logoutRouter);

  if (process.env.ENVIRONMENT === "prod") {
    // const privateKey = fs.readFileSync(
    //   "/etc/letsencrypt/live/exhalebrands.com/privkey.pem",
    //   "utf8"
    // );
    // const certificate = fs.readFileSync(
    //   "/etc/letsencrypt/live/exhalebrands.com/cert.pem",
    //   "utf8"
    // );
    // const ca = fs.readFileSync(
    //   "/etc/letsencrypt/live/exhalebrands.com/chain.pem",
    //   "utf8"
    // );

    // const credentials = {
    //   key: privateKey,
    //   cert: certificate,
    //   ca: ca
    // };

    const httpServer = http.createServer(insecureApp);
    const httpsServer = https.createServer(credentials, app);

    // insecureApp.all("*", (req, res) =>
    //   res.redirect(301, "https://meetingglue.com" + req.url)
    // );

    httpServer.listen(80, () => {
      console.log("HTTP Server running on port 80");
    });

    httpsServer.listen(443, () => {
      console.log("HTTPS Server running on port 443");
    });
  }

  if (process.env.ENVIRONMENT === "dev") {
    app.listen(3000, () => {
      console.log("listneing on localhost:3000");
    });
  }
});
