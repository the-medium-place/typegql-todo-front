import { DataSource } from "typeorm"
import Todo from '../src/entities/Todo'

export default new DataSource({
    type: "mysql",
    host: 'ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    username: 'fe3xtfshyj5wqheb',
    password: 'z7m0wk7dzc2xqiuw',
    database: 'wlu9vapajvgft9ri',
    // host: "localhost",
    // port: 3306,
    // username: "root",
    // password: "password",
    // database: "typegql_todo",
    entities: [Todo],
    synchronize: true,
    logging: false,
    // url: process.env.JAWSDB_URL
})