const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

async function initialize(passport, getUserByEmail, getUserById) {
  async function authenticateUser(email, password, done) {
    console.log("Checking email and password");
    let user = await getUserByEmail(email);
    user = user.rows[0];
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        console.log("password wrong");
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      console.log("Something caused error => ", e);
      return done(e);
    }
  }
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    return done(null, await getUserById(id));
  });
}

module.exports = initialize;
