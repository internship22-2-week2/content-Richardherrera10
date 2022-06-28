import https from 'https';

function requestURL(endpoint){
    return new Promise((resolve, reject) =>{
        https.get(endpoint, (result) =>{
            let data = ""
            result.on("data", (chunk) =>{
                data += chunk
            })
            result.on("end", ()=>{
                resolve(JSON.parse(data));
            });

            }).on("error", (error)=>{
                reject(error)
            console.log('statusCode:', result.statusCode);
    
        })
    })
}

async function getRequest(URL){
    const data = await requestURL(URL)
    console.log(data)
}

/* //ASINCRONA
getRequest("https://flagcdn.com/es/codes.json")
getRequest("https://jsonplaceholder.typicode.com/posts")
getRequest("https://jsonplaceholder.typicode.com/posts/2")

 */
const promesa1 = requestURL("https://flagcdn.com/es/codes.json")
const promesa2 = requestURL("https://jsonplaceholder.typicode.com/posts")
const promesa3 = requestURL("https://jsonplaceholder.typicode.com/posts/2")


/* //PROMISE.ALL
Promise.all([promesa1, promesa2, promesa3]).then(resultado=>{
    console.log(resultado);
}).catch(error=>{
    console.log(error)
}) 
 */

//PROMISE.RACE
 Promise.race([promesa1, promesa2, promesa3]).then(resultado=>{
    console.log(resultado);
}).catch(error=>{
    console.log(error)
})  