const express = require('express') //importando dependência do npm "express"
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data") //tirando dados do front pro back em data.js

server.use(express.static('public')) //para usar estilo do css, "arquivo estático utilizar = static" na pasta public

server.set("view engine", "njk") //identificando motor da view é um njk

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/66337541?s=400&u=98d533d3353d6d230480cca287aae2df7ea64ee1&v=4",
        name: "Eduardo Kobus",
        role: "Estudante - LauchBase",
        description:'Estudante de programação na <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>',
        links: [
            {name: "Github", url: "https://github.com/Edu-Kobus"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/Eduardo-Kobus"}
        ]
    }

    server.get("")

    return res.render("about", {about})
}) //'req' faz requisição ele ouve, e 'res' response responde, para rendenizar a pág. 'about'

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos })
}) //criando segunda rota

server.get("/video", function(req,res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video){
        return res.send("Video not found!")
    } //caso não encontre o video

    return res.render("video", { item: video })
})

server.listen(5000, function(){
    console.log("server is running!")
}) //criando porta 5000 server