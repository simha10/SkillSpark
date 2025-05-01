const {z} = require('zod');

const registerSchema = z.object({
    username: z.string({required_error:"Name is required"}).trim().min(3,{message:"Name must consist atleast 3 characters"}).max(255,{message:"Name must consist atmost 255 characters"}),
    email: z.string({required_error:"Email is required"}).email({message:"Email is invalid"}).trim().max(255,{message:"Email must consist atmost 255 characters"}),
    phone: z.string({required_error:"Phone number is required"}).min(10,{message:"Phone number must consist atleast 10 characters"}).max(10,{message:"Phone number must consist atmost 10 characters"}),
    password: z.string({required_error:"Password is required"}).min(8,{message:"Password must consist atleast 8 characters"}).max(255,{message:"Password must consist atmost 255 characters"}),
});

module.exports = {registerSchema};