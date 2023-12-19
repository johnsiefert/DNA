// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}


// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


function paequorFactory(num, arr) {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
          let changeBase = returnRandBase()
          let randNum = Math.floor(Math.random() * 16)
                while(this.dna[randNum] === changeBase) {
                 changeBase = returnRandBase()
           }
         this.dna[randNum] = changeBase

        return this.dna
       },
    compareDNA(pAequor) {
      let differences = 0;
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i]==pAequor.dna[i])
        differences++;
      }
      differences = (differences/this.dna.length*100).toFixed(2);
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${differences}% DNA in common`);
    },

        }
}

let sample1 = paequorFactory(1,mockUpStrand());
let sample2 = paequorFactory(2,mockUpStrand());
sample1.compareDNA(sample2);
sample.dna = mutate(sample);







