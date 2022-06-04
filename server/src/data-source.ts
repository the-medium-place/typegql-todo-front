import { DataSource } from "typeorm"
import Todo from './entities/Todo'
import User from "./entities/User"
require("dotenv").config()

export default new DataSource({
    type: "mysql",
    url: process.env.JAWSDB_URL,
    entities: [Todo, User],
    synchronize: true,
    logging: false,
})