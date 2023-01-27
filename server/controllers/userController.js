const User = require("../models/users.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
const { name, email } = req.body;

// check if user already exist
const userExist = await User.findOne({ email });
if (userExist) {
res.status(409);
return res.json("user already exist");
}

const salt = await bcrypt.genSalt(10);
const password = await bcrypt.hash(req.body.password, salt);
const user = await User.create({ name, email, password });

if (user) {
const token = jwt.sign(
{ id: user._id, email: user.email },
process.env.JWT_SECRET,
{
expiresIn: "30d",
}
);
res.json({
id: user._id,
name,
email,
isAdmin: user.isAdmin,
token,
});
}
};

const userAuth = async (req, res) => {
const { email, password } = req.body;

try {
const user = await User.findOne({ email });
if (!user) throw new Error("Invalid email or password");
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) throw new Error("Invalid email or password");
const token = jwt.sign(
{ id: user._id, email: user.email },
process.env.JWT_SECRET,
{
expiresIn: "30d",
}
);
res.json({
id: user._id,
name: user.name,
email: user.email,
isAdmin: user.isAdmin,
token,
});
} catch (error) {
res.status(401);
console.error("Invalid email or password");
res.json("Invalid email or password");
}
};

const getUser = async (req, res) => {
const user = await User.findById(req.user._id);
if (user) {
res.json({
id: user._id,
name: user.name,
email: user.email,
isAdmin: user.isAdmin,
});
} else {
res.status(404);
throw new Error("User not found");
}
};

module.exports = { userRegister, userAuth, getUser };