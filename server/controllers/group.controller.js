import Group from "../models/group.model.js";
import User from "../models/user.model.js";

export const createGroup = async (req, res, next) => {
  try {
    const { name, members } = req.body;
    const userId = req.userId;

    const admin = await User.findById(userId);

    if (!admin) {
      return res.status(400).json({ message: "Admin user not found." });
    }

    const validMembers = await User.find({ _id: { $in: members } });

    if (validMembers.length !== members.length) {
      return res
        .status(400)
        .json({ message: "Some members are not valid users." });
    }

    const newGroup = new Group({
      name,
      members,
      admin: userId,
    });

    await newGroup.save();
    return res.status(201).json({ group: newGroup });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
