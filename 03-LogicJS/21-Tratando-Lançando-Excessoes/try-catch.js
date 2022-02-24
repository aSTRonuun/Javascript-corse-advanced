function soma(a, b) {

    if(typeof a !== "number" || typeof b !== "number") {
        throw new Error("x e y precisam ser números");
    }

    return a + b;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, "2"));
} catch (error) {
    console.log(error);
}

