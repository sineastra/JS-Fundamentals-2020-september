function foo(arr) {
    let integers = arr
        .shift()
        .split(" ")
        .map(x => Number(x));

    function swap(i1, i2) {
        const [t1, t2] = [integers[i1], integers[i2]];
        [integers[i1], integers[i2]] = [t2, t1];
    }

    function multiply(i1, i2) {
        integers[i1] = integers[i1] * integers[i2];
    }

    function action(str) {
        let [command, index1, index2] = str.split(" ").map(x => (isNaN(Number(x)) ? x : Number(x)));
        const actions = {
            swap: () => swap(index1, index2),
            multiply: () => multiply(index1, index2),
            decrease: () => (integers = integers.map(x => x - 1)),
            end: () => console.log(integers.join(', ')),
        };

        return actions[command]();
    }

    arr.forEach(element => {
        action(element);
    });
}