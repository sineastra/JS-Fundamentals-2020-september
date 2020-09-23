function foo(str1, str2) {
    const sentence = str2.split(' ').map(x => x.toLocaleLowerCase());
    if (sentence.includes(str1.toLocaleLowerCase())) {
        return str1
    }
    return `${str1} not found!`
}