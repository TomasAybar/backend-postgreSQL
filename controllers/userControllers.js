const { Pool } = require('pg');

// Haciendo la conexion con postgres configurando los parametros
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'sanignacio',
    database: 'firstapi',
    port: '5432'
})

const userControllers = {
    getUsers: async (req, res) => {

        const response = await pool.query('SELECT * FROM users')

        res.json(response.rows)
    },

    createUser: async (req, res) => {

        const { name, email } = req.body;

        let response;
        let error = null;

        try { response = await pool.query('INSERT INTO users(name, email) VALUES ($1, $2)', [name, email]) }
        catch (err) { error = err; }

        res.json({
            response: error ? 'ERROR' : response,
            message: error ? 'ERROR' : 'usuario cargado correctamente',
            success: error ? false : true,
            error: error
        })
    },

    modifyUser: async (req, res) => {
        const id = req.params.id;
        const { name, email } = req.body;

        let response;
        let error = null;

        try { response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]) }
        catch (err) { error = err }

        res.json({
            response: error ? 'ERROR' : response,
            message: error ? 'ERROR' : 'usuario modificado correctamente',
            success: error ? false : true,
            error: error
        })
    },

    getOneUser: async (req, res) => {

        const id = req.params.id;
        let response;
        let error = null

        try { response = await pool.query('SELECT * FROM users WHERE id = $1', [id]) }

        catch (err) { error = err }

        res.json({
            response: error ? 'ERROR' : response.rows,
            message: error ? 'ERROR' : 'usuario encontrado',
            success: error ? false : true,
            error: error
        })

    },

    removeUser: async (req, res) => {

        const id = req.params.id;
        let response;
        let error = null

        try { response = await pool.query('DELETE FROM users WHERE id = $1', [id]) }

        catch (err) { error = err }

        res.json({
            response: error ? 'ERROR' : response.rows,
            message: error ? 'ERROR' : 'usuario eliminado',
            success: error ? false : true,
            error: error
        })

    }

}



module.exports = userControllers