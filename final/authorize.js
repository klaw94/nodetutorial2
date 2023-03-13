const authorize = (req, res, next) =>{
    const {user} = req.query
    //I get the user anr if it is not john I reply unathorized. So you have to write /path?user=john to enter
    //This is not how it is done in the industry.
    if(user === "john"){
        req.user = {name: 'john', id:3}
        next()
    } else{
        res.status(401).send('unathorized')
    }
    console.log('authorize')
    next()
}

module.exports = authorize