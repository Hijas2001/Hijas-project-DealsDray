const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// const register = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     let user = await User.findOne({ username });
//     if (user) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     user = new User({
//       username,
//       password: bcrypt.hashSync(password, 10),
//     });

//     await user.save();

//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });

//     res.status(201).json({ token });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };



// const login = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid user name' });
//     }

//     const isMatch = bcrypt.compareSync(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid password' });
//     }

//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });

//     res.status(200).json({ token });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = {
// //   register,
//   login,
// };



const login = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
  
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
  
      const payload = {
        user: {
          id: user.id,
        },
      };
  
      const token = jwt.sign(payload, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  module.exports = {
    login,
  };