import mongoose from 'mongoose'
import user from '../models/auth.js'

export const getAllUsers = async (req,res) => {
    try {
        const allUsers = await user.find();
        const allUserDetils = []
        allUsers.forEach(users => {
            allUserDetils.push({ _id: users._id, name: users.name, about: users.about, tags: user.tags, joinedOn: users.joinedOn })
        })
        res.status(200).json(allUserDetils);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}