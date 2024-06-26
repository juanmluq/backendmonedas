const { Router } = require('express');
const axios = require('axios');
const { Usermoneda } = require ("../db");
// const mercadopago = require("mercadopago");
require('dotenv').config();
const {
  MP_KEY
} = require("../config.js");

const router = Router();

const getDbInfo = async () => {
  return await Usermoneda.findAll({
  })
}

router.get("/usermonedas", async (req, res) => {
    const name = req.query.name
    let usuariosTotal = await getDbInfo();
    if(name) {
        let usuarioName = await usuariosTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        usuarioName.length ? 
        res.status(200).send(usuarioName) :
        res.status(404).send("No esta el user");
    } else { //si no me pasan name por query hacer:
        res.status(200).send(usuariosTotal)
    }
  })


 router.post("/usermoneda", async (req, res) => {
    let {
        name,
        user,
        password,
        saldo,
        correo,
        pais,
        phone,
        fecdata,
        access,
        pagopending,
        createdindb,
    } = req.body

    let usuarioCreated = await Usermoneda.create ({
        name,
        user,
        password,
        saldo,
        correo,
        pais,
        phone,
        fecdata,
        access,
        pagopending,
        createdindb,
    })

  res.send("Usuario creado con exito")
 });

 router.get("/usermonedas/:id", async (req, res) => {
    const id = req.params.id;
    const usuariosTotal = await getDbInfo();
    if(id) {
        let usuarioId = await usuariosTotal.filter(el => el.id == id)
        usuarioId.length ?
        res.status(200).json(usuarioId) :
        res.status(404).send("No se encontro ese usuario");
    }
});

router.put("/usermoneda/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let { saldo } = req.body;
        await Usermoneda.update(
            {saldo},
            {
                where: {
                    id,
                },
            }
        );
        res.status(200).send("saldo actualizado")
    } catch (error) {
         res.status(404).send("No se encontro ese usuario");
    }
})

router.put("/access/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let { access } = req.body;
        await Usermoneda.update(
            {access},
            {
                where: {
                    id,
                },
            }
        );
        res.status(200).send("access actualizado")
    } catch (error) {
         res.status(404).send("No se encontro ese usuario");
    } 
})

router.put("/pagopending/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let { pagopending } = req.body;
        await Usermoneda.update(
            {pagopending},
            {
                where: {
                    id,
                },
            }
        );
        res.status(200).send("pago pending actualizado")
    } catch (error) {
         res.status(404).send("No se encontro ese usuario");
    }
})

router.put("/password/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let { password } = req.body;
        await Usermoneda.update(
            {password},
            {
                where: {
                    id,
                },
            }
        );
        res.status(200).send("Password actualizado")
    } catch (error) {
         res.status(404).send("No se encontro ese usuario");
    } 
})

router.delete("/usermoneda/:id", async (req,res) => {
    
try{
    let id = req.params.id;
    await Usermoneda.destroy({
        where: {
            id,
        },
    });
    res.status(200).send("Usuario eliminado correctamente!")
  } catch(error){
    res.status(400).send("No se pudo eliminar el usuario")
  }
})
   
router.get('/feedback', function (req, res) {
       res.json({
           Payment: req.query.payment_id,
           Status: req.query.status,
           MerchantOrder: req.query.merchant_order_id
       });
   });


module.exports = router;
