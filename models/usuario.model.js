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
        let {nombre, edad, personaje_favorito, actividad_favorita, fecha_registro, version_cuento} = req.body
        pool.query('INSERT INTO usuarios (nombre, edad, personaje_favorito, actividad_favorita, fecha_registro, version_cuento) VALUES ($1,$2,$3,$4, $5, $6)', [nombre, edad, personaje_favorito, actividad_favorita, fecha_registro, version_cuento],
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
        let {nombre, edad, personaje_favorito, actividad_favorita, fecha_registro, version_cuento} = req.body
        pool.query('UPDATE usuarios SET nombre = $1, edad = $2, personaje_favorito = $3, actividad_favorita = $4, fecha_registro = $5, version_cuento = $6 WHERE id = $7', [nombre, edad, personaje_favorito, actividad_favorita, fecha_registro , version_cuento,id],
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.status(200).send(result)
                console.log('usuario actualizado...')
            }
        })
    },
    updateUsuarioByDate: (req, res) => {
        let date = req.params.date
        
        let {nombre, edad, personaje_favorito, actividad_favorita, fecha_registro, version_cuento} = req.body
        pool.query('UPDATE usuarios SET nombre = $1, edad = $2, personaje_favorito = $3, actividad_favorita = $4, fecha_registro = $5, version_cuento = $6 WHERE fecha_registro = $7', [nombre, edad, personaje_favorito, actividad_favorita, fecha_registro , version_cuento,date],
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.status(200).send(result)
                console.log('usuario actualizado...')
                console.log(date)
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