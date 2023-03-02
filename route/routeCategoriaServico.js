const express = require('express');

const modelCategoriaServico = require('../model/modelCategoriaServico');

const router = express.Router();


// -------------------------------------- ROTA DE CADASTRAR CATEGORIA DO SERVICO ------------------------------------
router.post('/cadastrarCategoriaServico', (req, res)=>{
    console.log(req.body);    
    let {desc_categoria} = req.body;
    modelCategoriaServico.create(
        //DADOS DA INSERÇÂO DE CATEGORIA
        {desc_categoria}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIA DO SERVICO CADASTRADA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR A CATEGORIA DO  SERVICO.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

// ------------------------------ ROTA DE LISTAGEM DE CATEGORIA DO SERVICO -----------------------------
router.get('/listarCategoriaServico', (req, res)=>{

    modelCategoriaServico.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"CATEGORIA DO SERVICO LISTADA COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"CATEGORIA DO SERVICO NÃO CONSTA NO BANCO DE DADOS.",
                    errorObject:error
                });
            }
        );

});
// -----------------------------------------------------------------------------------------------------

//------------------------------ ROTA DE LISTAGEM DE SERVICO POR ID ---------------------------
router.get('/listarCategoriaServicoPK/:id_categoria', (req, res)=>{

    //DECLARAR E RECEBER O ID
    let {id_categoria} = req.params;

    //AÇÃO DE SELEÇÃO DE DADOS DO SEQUELIZE
    modelCategoriaServico.findByPk(id_categoria)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIA DO SERVICO RECUPERADA COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"CATEGORIA DO SERVICO NÃO CONSTA NO BANCO DE DADOS.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ------------------------- ROTA DE LISTAGEM DE CATEGORIA DO SERVICO POR DESCRIÇÃO (NOME) --------------------------
router.get('/listarCategoriaServicoDESC/:desc_categoria', (req, res)=>{

    let {desc_categoria} = req.params;

    modelCategoriaServico.findOne({attributes:['id_categoria','desc_categoria'],where:{desc_categoria}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIA DO SERVICO RECUPERADA COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR A CATEGORIA DO  SERVICO.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------- ROTA DE ALTERAÇÃO DE CATEGORIA DO SERVICO ----------------------------------------
// router.put('/alterarServico', (req, res)=>{

//     const {id_servico, desc_servico} = req.body;

//     modelCategoriaServico.update(
//         {desc_servico},
//         {where:{id_servico}}
//     ).then(
//         ()=>{
//             return res.status(200).json({
//                 erroStatus:false,
//                 mensagemStatus:"SERVICO ALTERADO COM SUCESSO."
//             })
//         }
//     ).catch(
//         (error)=>{
//             return res.status(400).json({
//                 erroStatus:true,
//                 mensagemStatus:"ERRO AO ALTERAR O SERVICO.",
//                 errorObject:error
//             });
//         }
//     );    
// });
// -----------------------------------------------------------------------------------------------------

// ----------------------------------- ROTA DE EXCLUSÃO DE CATEGORIA DO SERVICO-----------------------------------
router.delete('/excluirCategoriaServico/:id_categoria', (req, res)=>{
    console.log(req.params);
    let {id_categoria} = req.params

    modelCategoriaServico.destroy(
        {where:{id_categoria}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIA DO SERVICO EXCLUIDA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR A CATEGORIA DO SERVICO.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

module.exports = router;