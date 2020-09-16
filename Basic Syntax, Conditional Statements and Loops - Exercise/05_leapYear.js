function foo (y) {
    return ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) ? 'yes' : 'no' 
}