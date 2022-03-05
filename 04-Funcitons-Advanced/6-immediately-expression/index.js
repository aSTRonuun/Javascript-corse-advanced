// IIFE -> Immediately invoked function expression

// IIFE - Sao funcoes altos invocadas que nao interferen no escopo global.
(function(age, weight, height) {

    const lastname = "Alves";
    function createName(name) {
        return name + " " + lastname;
    }

    function showName() {
        console.log(createName("Vitor"));
    }

    showName();
    console.log(age, weight, height);

})(21, 63, 1.75);