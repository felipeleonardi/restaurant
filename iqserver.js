const fs = require('fs');

async function logMovies1() {
    console.log('calling movies1....');
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${process.env.id1}`);
    // const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    return await response.json();

}

async function logMovies2() {
    console.log('calling movies2....');
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${process.env.id2}`);
    // const response = await fetch(`https://jsonplaceholder.typicode.com/todos/2`);
    return await response.json();
}

async function logMovies3() {
    console.log('calling movies3....');
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${process.env.id3}`);
    // const response = await fetch(`https://jsonplaceholder.typicode.com/todos/3`);
    return await response.json();
}

async function runAll() {
    new Promise(async (resolve, _) => {
        // const movies1 = await logMovies1();
        // console.log('showing movies1: ', movies1);

        // const movies2 = await logMovies2();
        // console.log('showing movies2: ', movies2);

        // const movies3 = await logMovies3();
        // console.log('showing movies3: ', movies3);

        const xml = await getSbomContent();
        console.log('sbom: ', xml);

        resolve();
    });
}

async function getSbomContent() {
    return new Promise((resolve, reject) => {
        fs.readFile(`./books.xml`, 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data)
        });
    });
}

console.log('env1: ', process.env.id1)
console.log('env2: ', process.env.id2)
console.log('env3: ', process.env.id3)

runAll();
