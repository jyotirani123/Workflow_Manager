const { Sequelize } = require('sequelize');
const { Client: PostgresClient } = require('pg');

const DEFAULT_DB_NAME = 'wfm_local';

class Connection {
    constructor() {
        this.connection = null;
        this.Connection = Sequelize;
    }

    async createDB(connection) {
        try {
            await connection.query(`
                CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || DEFAULT_DB_NAME}
            `);
            console.log(`>>>>>>>>>>>>>>>>>>>> Database create or successfully checked <<<<<<<<<<<<<<<<<<<<<`);
        } catch (error) {
            throw error;
        }
    }

    async #createPostgresConnection() {
        const {
            DB_USER,
            DB_PASSWORD,
            DB_HOST,
            DB_PORT,
        } = process.env;
        const client = new PostgresClient({
            host: DB_HOST,
            port: DB_PORT,
            user: DB_USER,
            password: DB_PASSWORD
        });
        client.connect((err) => {
            if(err) {
                console.log("error", err)
            };
        });
        await this.createDB(client);
    }

    async connect() {
        try {
            this.#createPostgresConnection();
            // const {
            //     DB_NAME,
            //     DB_USER,
            //     DB_PASSWORD,
            //     DB_HOST,
            //     DB_PORT,
            //     DB_DIALECT,
            // } = process.env;

            // this.connection = new Sequelize(
            //     DB_NAME || DEFAULT_DB_NAME,
            //     DB_USER || 'postgres',
            //     DB_PASSWORD || '', {
            //         host: DB_HOST || 'localhost',
            //         port: DB_PORT || 5436,
            //         dialect: DB_DIALECT || 'postgres'
            //     }
            // );
            // console.log(">>>>>>>>>>>>>>>>>>> Database Connected ! <<<<<<<<<<<<<<<<<<<<<<");
            // return this.connection;
        } catch(err) {
            throw err;
        }
    }

    async testConnection() {
        try {
            await this.connection.authenticate();
            return true;
        } catch(error) {
            throw error;
        }
    }
}

module.exports = Connection;