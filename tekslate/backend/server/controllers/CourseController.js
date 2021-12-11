import { Op } from 'sequelize';
import {Course} from '../models';

// const { Course } = model;

export default {
  async test(req, res) {
  
    try {
        const data = await Course.findAll({
            offset:0,
            limit:5
        });
        console.log(data);
        return res.status(200).json({
            success:true,
            message:"This is course controller"
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:true,
            message:"Some thing failed"
        });
    }
    
    }
}
