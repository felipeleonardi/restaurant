async function logMovies1() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const movies = await response.json();
    console.log(movies);
}

async function logMovies2() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const movies = await response.json();
    console.log(movies);
}

async function runAll() {
    await Promise.all([logMovies1(), logMovies2()])
}

runAll();