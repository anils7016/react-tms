import User from './models/User.js';

export const getUser = async (req, res) => {
    try{
        const id = req.params();
        const user = await user.findById(id);
        res.status(200).json(user);
    }catch(error){
        res.status(400).json( {message: error.message })
    } 


}