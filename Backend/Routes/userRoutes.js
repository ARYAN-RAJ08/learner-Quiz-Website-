const express = require('express')
const router = express.Router()
const userSchema = require('../Modal/mongoModal.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secretCode = "dadsfS@#@$#$#@$1351425431"

router.post('/', async (req, res) => {
    res.json("Server Running")
})

//------------------------------Signup or Register--------------------------------------

router.post('/signup', async (req, res) => {
    try {
        // Validate required fields
        const { fullName, email, pNumber, password } = req.body;
        if (!fullName || !email || !pNumber || !password) {
            return res.status(400).json({ status: false, message: "All fields are required" });
        }

        // Check for existing user using findOne instead of find
        const existingUser = await userSchema.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ status: false, message: "User with this email id already exists" });
        }

        // Hash password securely using bcrypt
        const hashPassword = await bcrypt.hash(password, 10);

        // Create and save new user using newUser.save()
        const newUser = new userSchema({ fullName, email, pNumber, password: hashPassword });
        await newUser.save();

        return res.status(201).json({ status: true, message: "Registration Successful!" });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
});

//---------------------------------------Log In-----------------------------------------

router.post('/login', async (req, res) => {
    try {
        // Validate required fields
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ status: false, message: "All fields are required" });
        }

        // Find user by pNumber
        const user = await userSchema.findOne({ email });

        // Check user existence and password validity
        if (!user) {
            return res.status(401).json({ status: false, message: "User does not exist" })
        }

        else if (!user.password || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ status: false, message: "Wrong Password" });
        }

        // Generate JWT token with appropriate claims
        const token = jwt.sign({ id: user._id, email: user.email }, secretCode, { expiresIn: '1hr' });

        // Send successful login response
        return res.status(200).json({ status: true, message: "Login Successful!", token });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
});

//------------------------------------Profile-------------------------------------------

// router.post('/profile', async (req, res) => {
//     try {

//         const token = req.headers?.authorization?.split(' ')[1];

//         if (!token) return res.status(404).json({ status: false, message: "Access Denied" })

//         jwt.verify(token, secretCode, async (err, decode) => {
//             const user = await userSchema.findById(decode?.id)
//             if (!user) return res.status(404).json({ status: false, message: "Invalid Token" })
//             const userData = {
//                 id: user.id,
//                 fName: user?.fName,
//                 lName: user?.lName,
//                 pNumber: user?.pNumber
//             }
//             return res.status(201).json({ status: true, message: "Profile Data", data: userData })
//         })
//     } catch (err) {
//         return res.status(404).json({ status: false, message: "Something went wrong", error: error.message })
//     }
// })

//------------------------------------Exporting-----------------------------------------

module.exports = router;