// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, arr) => {
	return {
		specimenNum: number,
		dna: arr,
    mutate() {
      let resultArr = [];
      const dnaBases = ['A', 'T', 'C', 'G'];
      //dnaBases[Math.floor(Math.random() * 4)];
      let i = 0;
      let tempDna = this.dna[i]
      do {
        if (tempDna === this.dna[i]) {
          tempDna = dnaBases[Math.floor(Math.random() * 4)];
        } else {
          resultArr.push(tempDna)
          i++;
          tempDna = this.dna[i]
        }
      } while (i < this.dna.length)
      return this.dna = resultArr
    }, compareDNA(anotherObjectToCompare) {
      let variable = 0;
      let i = 0;
      let percentage;
      do {
        if (this.dna[i] === anotherObjectToCompare.dna[i]) {
          variable++
          i++
        } else {
          i++
        }
      } while (i < this.dna.length)
      percentage = variable / this.dna.length
      console.log(`specimen #${this.specimenNum} and specimen #${anotherObjectToCompare.specimenNum} have ${(Math.floor(percentage*100))}% DNA in common`)
    },
    willLikelySurvive() {
      let i = 0;
      let variable = 0;
      do {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          variable++
          i++
        } else {
          i++
        } 
      } while (i < this.dna.length)
      let percentage = Math.floor((variable / this.dna.length) * 100)
      if (percentage >= 60) {
        return true
      } else {
        return false
      }
    }
  }
}


//step 7
function thirtyInstances() {
  tempObj = {};
  tempArr = [];
  let i = 0;
  let j = Boolean
  //
  do {
    j = pAequorFactory(i, mockUpStrand()).willLikelySurvive()
    if (j === true) {
      tempArr = pAequorFactory(i, mockUpStrand()).dna
      tempObj
      tempObj[`Specimen ${i+1}`] = tempArr
      i++
    }
  } while (i < 30)
  return tempObj;
}

thirtyInstances()


//step 6
pAequorFactory(1, mockUpStrand()).willLikelySurvive()


//step 5
let specimenNum1 = pAequorFactory(1, mockUpStrand())
let specimenNum2 = pAequorFactory(2, mockUpStrand())
specimenNum1.compareDNA(specimenNum2)


//step 4
const result = pAequorFactory(10, mockUpStrand())
console.log(`The value of DNA = [${result.dna}]`)
result.mutate()
console.log(`After mutate, the value of dna = ${result.dna}`)
//
