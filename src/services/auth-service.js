'use strict'

const jwt = require('jsonwebtoken')

exports.generateToken = async data => {
	return jwt.sign(data, global.SALT_KEY, {expiresIn: '1d'})
}

exports.decodeToken = async token => {
	const data = await jwt.verify(token, config.SALT_KEY)
	return data
}

exports.authorize = (req, res, next) => {
	const token = req.headers['x-access-token']

	if(!token){
		res.status(401).json({ message: "Acesso restrito" })
	}else{
		jwt.verify(token, global.SALT_KEY, (error, decoded) => {
			if(error){
				res.status(401).json({ message: 'Token invalido' })
			} else {
				next()
			}
		})
	}
}
