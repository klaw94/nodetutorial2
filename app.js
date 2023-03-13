const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homejs = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    console.log(req.url)
    const url = req.url

    if (url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        console.log('user hit the server')
        res.write(homePage)
        //You need to have the end but you dont need to write anything between the brackets. 
        res.end()
    }

    if (url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        console.log('user hit the server')
        res.write(homeStyle)
        //You need to have the end but you dont need to write anything between the brackets. 
        res.end()
    }

    if (url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        console.log('user hit the server')
        res.write(homeImage)
        //You need to have the end but you dont need to write anything between the brackets. 
        res.end()
    }

    if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        console.log('user hit the server')
        res.write(homejs)
        //You need to have the end but you dont need to write anything between the brackets. 
        res.end()
    }

    if (url === '/local'){
        res.writeHead(200, {'content-type':'text/html'})
        console.log('user hit the server')
        res.write("<h1>Local</h1>")
        //You need to have the end but you dont need to write anything between the brackets. 
        res.end()
    }

    //provide metadata and headers with writeHead
    //status code 200 is successful

})

server.listen(5000)

//There's specific ports for specific actions. 

//http status codes. Check them online. 

//MIME types (media types).