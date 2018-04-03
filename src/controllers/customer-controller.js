'use strict'

const repository = require('../repositories/customer-repository')

exports.post = async (req, res, next) => {
	try{
		await repository.create(req.body)
		res.status(200).send({message: 'Cliente cadastrado com sucesso!'})
	}catch(error){
		res.status(500).send({
			message: "Falha ao processar a requisicao",
			error: error
		})
	}
}
