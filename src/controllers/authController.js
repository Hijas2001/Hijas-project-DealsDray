
const jwt = require('jsonwebtoken');

const adminmail = process.env.ADMINEMAIL;
const adminpassword = process.env.ADMINPASSWORD;
const login = async (req, res) => {
    const { username, password } = req.body;

    if (username !== adminmail) {
        return res.json({
            success: false,
            error: "Username is incorrect"
        });
    }

    if (password !== adminpassword) {
        return res.json({
            success: false,
            error: "Password is incorrect"
        });
    }

    // Generate a token
    const token = jwt.sign({ username }, "secretKey", { expiresIn: '1h' });

    return res.json({
        success: true,
        token
    });
};

const register =  (req, res) => {
    console.log("image url:", req.body);
    const image_URL = req.body
    if (image_URL !== null) {
        res.json({ success: true, message: "Image uploaded successfully" });
    } else {
        res.json({ success: false, message: "Image uploaded field is empty" });
    }
}

module.exports = {
    login,
    register
};