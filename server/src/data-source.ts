import { DataSource } from "typeorm"
import Todo from './entities/Todo'
import User from "./entities/User"
require("dotenv").config()

export default new DataSource({
    type: "mysql",
    host: process.env.REACT_APP_DB_HOST,
    port: 3306,
    username: process.env.REACT_APP_DB_USERNAME,
    password: process.env.REACT_APP_DB_PASSWORD,
    database: process.env.REACT_APP_DB_DATABASE,
    entities: [Todo, User],
    synchronize: true,
    logging: false,
})