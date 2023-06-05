import {pool} from '../db.js'
export const getbase = async (req, res)=>{
    const resultado= await pool.query('SELECT 1+1 AS resultado')
    res.json(resultado)
  }