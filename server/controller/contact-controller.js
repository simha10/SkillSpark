const Contact = require("../models/contact-model");
const contactform = async (req, res) => {
    try {
        const response = req.body;
        const contact = await Contact.create(response);
        console.log("Contact created:", contact); 
        return res.status(201).send({ msg: "Contact form submitted successfully" });
    } catch (err) {
        console.error("Contact form error:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = contactform;