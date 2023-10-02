const Matricula = require('../model/Matricula')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Matricula.find({}, (error, matriculas)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los alumnos'
            })
        }
        return res.render('index', {matriculas: matriculas})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const matricula = new Matricula({
        nombre: req.body.nombre,
        edad: req.body.edad
    })
    matricula.save(function(error,alumno){
        if(error){
            return res.status(500).json({
                message: 'Error al crear la Matricula'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    Matricula.findByIdAndUpdate(id, {nombre, edad}, (error, matricula)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Alumno'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Matricula.findByIdAndRemove(id, (error, matricula)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando la Matricula'
            })
        }
        res.redirect('/')
    })
};const Matricula = require('../model/Matricula')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Matricula.find({}, (error, matriculas)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando la Matricula'
            })
        }
        return res.render('index', {matriculas: matriculas})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const matricula = new Matricula({
        nombre: req.body.nombre,
        edad: req.body.edad
    })
    matricula.save(function(error,matricula){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el Matriculav'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    Matricula.findByIdAndUpdate(id, {nombre, edad}, (error, matricula)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Matricula'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Matricula.findByIdAndRemove(id, (error, matricula)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Matriculav'
            })
        }
        res.redirect('/')
    })
}