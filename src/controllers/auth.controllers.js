import User from "../models/User.js";
import passport from "passport";

export const renderSignUpForm = (req, res) => res.render("auth/signup");

export const signup = async (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    errors.push({ text: "La contraseña no es correcta" });
  }

  if (password.length < 4) {
    errors.push({ text: "La contraseña debe tener mas de 4 caracteres" });
  }

  if (errors.length > 0) {
    return res.render("auth/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  }

  // Busca coincidencias de correo
  const userFound = await User.findOne({ email: email });
  if (userFound) {
    req.flash("error_msg", "El correo ya esta registrado");
    return res.redirect("/auth/signup");
  }

  // Guarda un nuevo usuario
  const newUser = new User({ name, surname, email, password });
  newUser.password = await newUser.encryptPassword(password);
  await newUser.save();
  req.flash("success_msg", "Ya estas registrado");
  res.redirect("/auth/signin");
};

export const renderSigninForm = (req, res) => res.render("auth/signin");

export const signin = passport.authenticate("local", {
  successRedirect: "/notes",
  failureRedirect: "/auth/signin",
  failureFlash: true,
});

export const logout = async (req, res, next) => {
  await req.logout((err) => {
    if (err) return next(err);
    req.flash("success_msg", "Has cerrado sesión");
    res.redirect("/auth/signin");
  });
};
