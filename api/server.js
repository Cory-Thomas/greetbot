const express = require( 'express' );

const server = express();

server.get( '/', ( req,res ) => {
    res.status(200).json({ 
        hello: "Hello World", 
        environment: process.env.NODE_ENV,
        port: `${process.env.PORT}`
    })
});

module.exports = server;