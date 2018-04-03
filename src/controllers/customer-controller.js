'use strict'

const md5 = require('md5')
const repository = require('../repositories/customer-repository')

exports.post = async (req, res, next) => {
	try{
		await repository.create({
			name: req.body.name,
			email: req.body.email,
			passwords: md5(req.body.passwords + global.SALT_KEY)
		})
		res.status(200).send({message: 'Cliente cadastrado com sucesso!'})
	}catch(error){
		res.status(500).send({
			message: "Falha ao processar a requisicao",
			error: error
		})
	}
}
