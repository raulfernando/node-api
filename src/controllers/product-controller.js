'use strict'

const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const repository = require('../repositories/product-repository')

exports.get = async (req, res, next) => {
	try{
		const data = await repository.get()
		res.status(200).send(data)
	}catch(error){
			res.status(500).send({
				message: "Falha ao processar a requisicao"
			})
	}
}

exports.getBySlug = async (req, res, next) => {
	try{
		const data = await repository.getBySlug(req.params.slug)
		res.status(200).send(data)
	}catch(error){
		res.status(500).send({
			message: "Falha ao processar a requisicao"
		})
	}
}

exports.getByTag = async (req, res, next) => {
	try{
		const data = await repository.getByTag(req.params.tag)
		res.status(200).send(data)
	}catch(error){
		res.status(500).send({
			message: "Falha ao processar a requisicao"
		})
	}
}

exports.post = async (req, res, next) => {
	try{
		await repository.create(req.body)
		res.status(200).send({message: 'Produto cadastrado com sucesso!'})
	}catch(error){
		res.status(500).send({
			message: "Falha ao processar a requisicao"
		})
	}
}

exports.put = async (req, res, next) => {
	try{
		await repository.update(req.params.id, req.body)
		res.status(200).send(result)
	}catch(error){
		res.status(500).send({
			message: "Falha ao processar a requisicao"
		})
	}
}

exports.delete = async (req, res, next) => {
	try{
		await repository.delete(req.params.id)
		res.status(200).send({message: "Produto removido com sucesso"})
	}catch(error){
		res.status(500).send({
			message: "Falha ao processar a requisicao"
		})
	}
}
