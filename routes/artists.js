import _ from "lodash"

import express from "express"

import artists from '../db/artists.js'

import createError from 'http-errors'

const router = express.Router()

router.get('/', async(req, res) => {
  res.json(artists)
})

router.get('/:id', async(req, res, next) => {
  const artist = artists.find(a => a.id == req.params.id)

  if(!artist) return next(createError(404, "Artist not found"))

  res.json(artist)
})

export default router