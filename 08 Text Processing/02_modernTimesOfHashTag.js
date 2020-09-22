function foo(str) {
    str.match(/#[a-zA-Z]+/g).forEach(x => { console.log(x.slice(1)) })
}