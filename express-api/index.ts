// const express = require('express')
import express from 'express';



const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(401).json({
        ok:false,
        msg: 'token no existe'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})