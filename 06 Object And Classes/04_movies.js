function foo(arr) {
    let movies = []
    
    getMovie = value => movies.find(x => x.name === value)

    addProp = (prop, name, value) => {
        if (getMovie(name)) getMovie(name)[prop] = value
    }

    const actions = {
        addMovie: x => movies.push({ name: x }),
        directedBy: addProp.bind(undefined, "director"),
        onDate: addProp.bind(undefined, "date"),
    }

    arr.forEach(x => {
        if (x.split(" ")[0] === "addMovie") {
            let arr = x.split(" ")
            arr.shift()
            actions.addMovie(arr.join(" "))
        } else if (x.split("directedBy").length > 1) {
            let array = x.split("directedBy").map(x => x.trim())
            actions.directedBy(array[0], array[1])
        } else if (x.split("onDate").length > 1) {
            let array = x.split("onDate").map(x => x.trim())
            actions.onDate(array[0], array[1])
        }
    })

    movies = movies.filter(x => Object.keys(x).length === 3)
    movies.forEach(x => console.log(JSON.stringify(x)))
}

foo([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
])
