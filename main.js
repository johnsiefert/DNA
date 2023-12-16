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
      let generatedBase = returnRandBase();
      let currentBase = dna
      if(currentBase === generatedBase){
        return 'T'
      }
    }
  }
}

console.log(paequorFactory.mutate)







