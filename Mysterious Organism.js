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
      dnaBases[Math.floor(Math.random() * 4)];
      let i = 0;
      let tempDna = this.dna[i]
      console.log(`맨 처음 i는 ${i}이며, dna[i]는 ${this.dna[i]}입니다.`)
      do {
        if (tempDna === this.dna[i]) {
          console.log(`i = ${i}: tempDna와 this.dna[${i}]의 값이 같습니다. | ${tempDna} = ${this.dna[i]}`)
          tempDna = dnaBases[Math.floor(Math.random() * 4)];
          console.log(`i = ${i}: tempDna 제작 성공, tempDna: ${tempDna}.`)
        } else {
          resultArr.push(tempDna)
          console.log(`resultArr = [${resultArr}]`)
          i++;
          console.log(`i 증가 완료. i = ${i}, 현재 tempDna는 ${tempDna}.`)
          tempDna = this.dna[i]
          console.log(`tempDna 초기화 완료 = dna[${i}]값과 같게 재설정 | ${tempDna} : ${this.dna[i]}`)
        }
      } while (i < this.dna.length)
      return this.dna = resultArr
    },
    compareDNA(anotherObjectToCompare) {
      //현재 이 함수의 dna 배열과 parameter에 올 새로운 dna배열을 비교하는 함수이다.
      //this.dna[i]와 다른 dna[i]가 같은지 비교하기
      //return nothing. but console log로 두개의 배열이 몇 퍼센트 유사한지 나타낸다.
      //specimenNum을 통해서 보기 쉽게 각각 배열의 번호를 매긴다.
      let variable = 0;
      let i = 0;
      let percentage;
      do {
        if (this.dna[i] === anotherObjectToCompare.dna[i]) {
         console.log(`this.dna[${i}]= ${this.dna[i]}, compare.dna[${i}]= ${anotherObjectToCompare.dna[i]}`)
          variable++
          console.log(`variable = ${variable}`)
          i++
        } else {
          i++
        }
        console.log(`i = ${i}`)
      } while (i < this.dna.length)
      percentage = variable / this.dna.length
      console.log(percentage)
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
      console.log(`chance of survival: ${percentage}%`)
      if (percentage >= 60) {
        return true
      } else {
        return false
      }
    }
  }
}

//step 7에서
function thirtyInstances() {
  tempObj = {};
  tempArr = [];
  let i = 0;
  let j = Boolean
  //
  do {
    j = pAequorFactory(i, mockUpStrand()).willLikelySurvive()
    console.log(j)
    if (j === true) {
      tempArr = pAequorFactory(i, mockUpStrand()).dna
      tempObj
      tempObj[`Specimen ${i}`] = tempArr
      i++
    }
  } while (i < 30)
  return tempObj;
}

//step 6에서
pAequorFactory(1, mockUpStrand()).willLikelySurvive()


//step 5에서
let specimenNum1 = pAequorFactory(1, mockUpStrand())
let specimenNum2 = pAequorFactory(2, mockUpStrand())
specimenNum1.compareDNA(specimenNum2)


//step 4에서
const result = pAequorFactory(10, mockUpStrand())
console.log(`The value of DNA = [${result.dna}]`)
result.mutate()
console.log(`After mutate, the value of dna = ${result.dna}`)
//


















// 콘솔 없는 버전 밑에
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


//step 7에서
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
//object의 key(property) 갯수 세는 법 = 함수 Object.keys()를 사용한다.
//const customObject = thirtyInstances()
//Object.keys(customObject)


//step 6에서
pAequorFactory(1, mockUpStrand()).willLikelySurvive()


//step 5에서
let specimenNum1 = pAequorFactory(1, mockUpStrand())
let specimenNum2 = pAequorFactory(2, mockUpStrand())
specimenNum1.compareDNA(specimenNum2)


//step 4에서
const result = pAequorFactory(10, mockUpStrand())
console.log(`The value of DNA = [${result.dna}]`)
result.mutate()
console.log(`After mutate, the value of dna = ${result.dna}`)
//