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
       compareDNA(arr){
        for(let i = 0; i > this.dna.length; i++){
          for(let j = 0; j > arr.length; j++){
                if(this.dna[i] === arr[j]){
                  let sum = (this.dna[i] / arr[j]) * 100
                  console.log(sum)
                `specimen#${this.specimenNum} and specimen#${this.specimenNum} have ${sum.toFixed()} DNA in common}`
              }
          }
        }
       },

  }
}

 const dnaStrand = paequorFactory(1,['C', 'G', 'A', 'A', 'A', 'C', 'A', 'C', 'C', 'C', 'G', 'A', 'T', 'G', 'G' ])
 const dnaStrand2 = paequorFactory(2,['C', 'A', 'A', 'C', 'A', 'A', 'G', 'C', 'C', 'C', 'G', 'A', 'T', 'G', 'G' ])
console.log(dnaStrand.compareDNA(['C', 'G', 'A', 'A', 'A', 'C', 'A', 'C', 'C', 'C', 'G', 'A', 'T', 'G', 'G' ]))
console.log(dnaStrand2.compareDNA(['C', 'A', 'A', 'C', 'A', 'A', 'G', 'C', 'C', 'C', 'G', 'A', 'T', 'G', 'G' ]))








