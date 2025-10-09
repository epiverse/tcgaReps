console.log(`tcgaReps index.js loaded \n${Date()}`);

(async function(){
    // anonymous asynchronous execution
    const tcgaReps = await import('https://epiverse.github.io/tcgaReps/tcgaReps.mjs')
    //cli.msg(`tcgaReps index.js imported ${Date()}`)
})();