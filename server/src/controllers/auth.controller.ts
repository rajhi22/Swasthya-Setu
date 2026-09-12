import type { RequestHandler } from 'express'; import * as auth from '../services/auth.service.js';
export const login:RequestHandler=async(req,res,next)=>{try{res.json({success:true,data:await auth.login(req.body)})}catch(error){next(error)}};
export const me:RequestHandler=async(req,res,next)=>{try{res.json({success:true,data:await auth.me(req.user!.id)})}catch(error){next(error)}};
export const logout:RequestHandler=(_,res)=>res.json({success:true,data:{}});
