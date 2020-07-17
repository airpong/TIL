const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const { User } = require("../models");
const passport = require("passport");

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    const Usery = await User.findOne({ where: { id } });
    try {
      done(null, Usery);
    } catch (error) {
      done(error);
    }
  });
  local(passport);
  kakao(passport);
};
