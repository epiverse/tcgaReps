console.log(`tcga Reps index.js loaded \n${Date()}`);

(async function(){
    // anonymous asynchronous execution
    const tcgaReps = await import('https://epiverse.github.io/tcgaReps/tcgaReps.mjs')
    tcgaReps.msg(`tcgaReps index.js imported ${Date()}`)
})();