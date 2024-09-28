import User from "../models/user.model.js";

export const searchContacts = async (req, res, next) => {
  try {
    const { contact } = req.body;

    if (contact === undefined || contact === null) {
      return res.status(400).json({
        message: "Enter contact to search.",
      });
    }

    const sanitizedContact = contact.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(sanitizedContact, "i");

    const contacts = await User.find({
      $and: [
        { _id: { $ne: req.userId } },
        {
          $or: [{ firstName: regex }, { lastName: regex }, { email: regex }],
        },
      ],
    });

    return res.status(200).json({
      contacts,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
