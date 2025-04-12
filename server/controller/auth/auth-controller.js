import jwt from "jsonwebtoken";
import User from "../../models/User.js";
import bcrypt from "bcryptjs";
export const registerUser = async (req, res) => {
  const { firstName,lastName, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return res.json({
        success: false,
        message: "User already exist please use another email",
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ firstName,lastName, email, password: hashPassword });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successfull",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred while registering",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the fields are empty
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(402).json({ message: "User Doesnot Exist" });
    }
    const comparePassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!comparePassword) {
      return res.status(402).json({ message: "Invalid Password" });
    }

    //generate token
    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        role: existingUser.role,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie('token',token, {
      httpOnly: true,
      secure: false
      
    }).json({
      success: true,
      message: "Login successful",
      user: {
        id: existingUser._id,
        email: existingUser.email,
        role: existingUser.role,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
      },
    })

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
