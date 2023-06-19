import http from 'http'


interface Record {
    id: number,
    name: string,
    tel: number,
    address: string
}

interface TelBook {
    [index: number]: Record;
}


let record: Record
let telbook: TelBook


http.createServer((request, response) => {
    let body: any[] | Uint8Array
    let url = request.url
    if (request.method === "GET") {
        if (url === '/all/') {
            response.writeHead(200, { "Content-type": "text/html" })
            console.log('Все номера')
        }
    }
    response.end()

}

).listen(3000, () => { console.log('Server is runing') });