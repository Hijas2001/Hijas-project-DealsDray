
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

const register = async(req,res)=>{
console.log("image url:",req.body);
res.end()
}

module.exports = {
    login,
    register
};