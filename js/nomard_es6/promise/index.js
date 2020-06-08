// fetch("https://yts.mx/api/v2/list_movies.json")
//     .then(response => {
//         console.log(response)
//         return response
//     })
//     .then(response => {
//         console.log(response)
//         console.log(response.json())
//     })

const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json")
    console.log(response)
    const json = await response.json()
    console.log(json)
}

getMovies()