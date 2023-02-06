const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
const { name, email, password } = req.body;

try {
    // Check if the user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
    return res.status(409).json({ error: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const user = await User.create({ name, email, password: hashedPassword });

if (user) {
    const token = jwt.sign({ id: user._id , email: user.email}, process.env.JWT_SECRET, {expiresIn: '30d'});
    res.json({
                    id: user._id,
                    name,
                    email,
                    isAdmin: user.isAdmin,
                    token : token
                })
}
} catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to create user" });
}
};


////////////////////////////////////////////////////


const userAuth = async (req, res) => {
const { email, password } = req.body;

try {
    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
    return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate the JWT
    const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
    );

    // Return the user and the JWT
    return res.json(user);
} catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to authenticate user" });
}
};


////////////////////////////////////////////////////


const getUser = async (req, res) => {
const user = await User.findById(req.params.id);
if (user) {
    res.json(user);
} else {
    res.status(404);
    throw new Error("user Not Found...");
}
};

module.exports = { userRegister, userAuth, getUser };