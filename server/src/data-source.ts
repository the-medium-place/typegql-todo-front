import { DataSource } from "typeorm"
import Todo from '../src/entities/Todo'

export default new DataSource({
    type: "mysql",
    // host: "localhost",
    // port: 3306,
    // username: "root",
    // password: "password",
    // database: "typegql_todo",
    entities: [Todo],
    synchronize: true,
    logging: false,
    url: process.env.JAWSDB_URL
})