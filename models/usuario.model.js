const pool = require("../dbconfig")

const queries = {
    getUsuarios : (req,res)=>{ pool.query ('SELECT * FROM usuarios',
    (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(result.rows)
        }
    })
    },
    getUsuarioByID: (req,res)=>{
        let id = (req.params.id)
        pool.query('SELECT * FROM usuarios WHERE id = $1', [id],
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.status(200).send(result.rows)
            }
        })
    },
    createUsuario: (req,res)=>{
        let {nombre, edad, personaje_favorito, actividad_favorita} = req.body
        pool.query('INSERT INTO usuarios (nombre, edad, personaje_favorito, actividad_favorita) VALUES ($1,$2,$3,$4)', [nombre, edad, personaje_favorito, actividad_favorita],
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.status(200).send(result)
                console.log('usuario creado...')
            }
        })
    },
    updateUsuario: (req, res) => {
        let id = req.params.id
        let {nombre, edad, personaje_favorito, actividad_favorita} = req.body
        pool.query('UPDATE usuarios SET nombre = $1, edad = $2, personaje_favorito = $3, actividad_favorita = $4 WHERE id = $5', [nombre, edad, personaje_favorito, actividad_favorita, id],
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.status(200).send(result)
                console.log('usuario actualizado...')
            }
        })
    },
    deleteUsuario: (req, res)=>{
        let id = req.params.id
        pool.query('DELETE FROM usuarios WHERE id = $1', [id], 
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.status(200).send(result)
                console.log('usuario eliminado...')
            }
        })
    }
}

module.exports = queries;