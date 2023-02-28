const express = require('express');

const modelUsuario = require('../model/modelUsuario');

const router = express.Router();


// -------------------------------------- ROTA DE CADASTRAR USUARIO ------------------------------------
router.post('/cadastrarUsuario', (req, res)=>{
    console.log(req.body);    
    let {nome, uf, telefone, email, senha} = req.body;
    modelUsuario.create(
        //DADOS DA INSERÇÂO DE USUARIO
        {nome, uf, telefone, email, senha}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"USUARIO INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O USUARIO.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

// ------------------------------ ROTA DE LISTAGEM DE USUARIO -----------------------------
router.get('/listarUsuario', (req, res)=>{

    modelUsuario.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"USUARIO LISTADO COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"USUARIO NÃO CONSTA NO BANCO DE DADOS.",
                    errorObject:error
                });
            }
        );

});
// -----------------------------------------------------------------------------------------------------

//------------------------------ ROTA DE LISTAGEM DE USUARIO POR NOME ---------------------------
router.get('/listarUsuarioPK/:nome', (req, res)=>{

    //DECLARAR E RECEBER O NOME
    let {nome} = req.params;

    //AÇÃO DE SELEÇÃO DE DADOS DO SEQUELIZE
    modelUsuario.findByPk(nome)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"USUARIO RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"USUARIO NÃO CONSTA NO BANCO DE DADOS.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ------------------------- ROTA DE LISTAGEM DE USUARIO POR EMAIL --------------------------
router.get('/listarUsuarioNOME/:email', (req, res)=>{

    let {email} = req.params;

    modelUsuario.findOne({attributes:['nome','uf','telefone','email','senha'],where:{email}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"EMAIL RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O EMAIL.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------- ROTA DE ALTERAÇÃO DE USUARIO ----------------------------------------
router.put('/alterarUsuario', (req, res)=>{

    const {nome, uf, telefone, email, senha} = req.body;

    modelUsuario.update(
        {nome, uf, telefone, email, senha},
        {where:{nome}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"USUARIO ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O USUARIO.",
                errorObject:error
            });
        }
    );    
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------------- ROTA DE EXCLUSÃO DE USUARIO-----------------------------------
router.delete('/excluirUsuario/:nome', (req, res)=>{
    console.log(req.params);
    let {nome} = req.params

    modelUsuario.destroy(
        {where:{nome}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"USUARIO EXCLUIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O USUARIO.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------



module.exports = router;