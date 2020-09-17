function foo(str) {
    // react much??

    const errors = []
    function isValidLength(str) {
        if (!(str.length >= 6 && str.length <= 10))
            errors.push("Password must be between 6 and 10 characters")
        return str
    }

    function isOnlyLettersDigits(str) {
        if (!str.match(/^[a-zA-Z0-9]+$/g)) errors.push("Password must consist only of letters and digits")
        return str
    }

    function atleastTwoDigis(str) {
        if (!str.match(/[0-9]{2,}/g)) errors.push("Password must have at least 2 digits")
        return str
    }

    atleastTwoDigis(isOnlyLettersDigits(isValidLength(str)))

    errors.length === 0 ? console.log("Password is valid") : errors.forEach(x => console.log(x))
}
