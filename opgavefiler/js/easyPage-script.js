async function startCountdown() {
    /* This is a p element. */
    const countdownElement = document.getElementById("countdown");
    let count = 5;

    while (count >= 0) {
        countdownElement.textContent = count;
        await sleep(1000); // Vent i 1 sekund (1000 millisekunder)
        count--;
    };

    countdownElement.textContent = "Færdig!";
};

function sleep(ms) {
    /* Research notes: 
    "The Promise() constructor creates Promise objects. It is primarily used to wrap callback-based APIs that do not already support promises. (...)
    Syntax
    js
    new Promise(executor) (...)
    executor
    A function to be executed by the constructor."
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
    */
    /* The following could also be written:  
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
    */
    return new Promise(resolve => setTimeout(resolve, ms));
};

startCountdown();