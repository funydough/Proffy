
//servidor
const express = require('express')
const server = express()

const { 
    pageLanding, 
    pageStudy, 
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
} )
//inicio e configuração do servidor
server
//receber os datos do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estátivos (css, scripts, imagens)
.use(express.static("public"))
// rotadas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start servidr 
.listen(5000)