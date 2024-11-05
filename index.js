const http = require('http');

const generator = require('generate-password');
http.createServer((req, res) => {

    const password = generator.generate({
        length: 10,
        numbers: true
    });

    console.log("generated password: ", password);



    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>${password}</h1>`);
    res.end();
}).listen(3070, () => {
    console.log("Server is running on port 3050");

});

