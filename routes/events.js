
/*
Event Routes
/api/events
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("./middlewares/validar-campos")
const { validarJWT } = require("../routes/middlewares/validar-jwt");
const { getEvento, crearEvento, actualizarEvento, eliminarEvento } = require("./controllers/events");

const router = Router();

//todos tiene que pasar la validación del JWT
router.use( validarJWT );



// obtener eventos
router.get("/", getEvento);

//crear un nuevo evento
router.post(
    "/",
    [
        check("title","el titulo es obligatorio").not().isEmpty(),
        check("start","Fecha de inicio es obligatoria").custom( isDate ),
        check("end","Fecha de finalizacion es obligatoria").custom( isDate ),
        validarCampos
    ],
    crearEvento
 );

//actualizar evento
router.put("/:id", actualizarEvento);

//Borrar evento
router.delete("/:id", eliminarEvento);

module.exports = router