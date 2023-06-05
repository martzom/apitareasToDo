import { config } from "dotenv";
config()

export const PORT =process.env.PORT || 3000
export const DB_PORT =process.env.DB_PORT || 6178
export const DB_HOST =process.env.DB_HOST  || 'WwReoNGB80YZqUF9ybZS'
export const DB_USER=process.env.DB_USER || 'root'
export const DB_PASSWORD=process.env.DB_PASSWORD || 'containers-us-west-42.railway.app'
export const DB_DATABASE =process.env.DB_DATABASE || 'railway'