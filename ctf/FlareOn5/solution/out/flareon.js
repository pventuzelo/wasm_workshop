result = ''

Wasabi.analysis = {
    binary(location, op, first, second, r) {
        if (op == 'i32.eq') {
            result += String.fromCharCode(first);
            console.log(location, op, "first =", first, " second =", second, "result =", r);
            console.log(location, op, "first =", String.fromCharCode(first), " second =", String.fromCharCode(second), "result =", r);
            console.log(result);
        }
    }
};