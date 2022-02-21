module.exports = (app)=>{
    //atender a requisição /portifólio com o conteúdo de portifolio.ejs
    app.get('/portifolio', (req,res)=>{
        res.render('portifolio.ejs')
    })
}