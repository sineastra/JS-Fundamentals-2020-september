function foo(arr) {
    const r = /(?:^| )([A-Za-z0-9]+[-._]*)+\b@([a-zA-Z]+\-*[a-zA-Z]+\.[a-zA-Z]+\-*[a-zA-Z]+)(\.*[a-zA-Z]+\-*[a-zA-Z]+)*/g
    const matches = arr[0].match(r) || []

    matches.map(x => x.trim()).forEach(x => console.log(x))
}