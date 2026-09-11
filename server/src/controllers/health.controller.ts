import type { RequestHandler } from 'express'; export const health:RequestHandler=(_,res)=>res.json({success:true,message:'Swasthya Setu API is running',timestamp:new Date().toISOString()});
