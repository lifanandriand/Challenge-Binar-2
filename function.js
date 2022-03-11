class Students {
    constructor(scores) {
      this.scores = scores.sort((a, b) => {
        return a - b;
      });
    }
  
    minScore() {
      let min = Math.min(...this.scores);
      return min;
    }
  
    maxScore() {
      let max = Math.max(...this.scores);
      return max;
    }
  
    avgScore(){
      const sum = this.scores.reduce((a, b) => a + b);
      const avg = (sum / this.scores.length);
      return avg;
    }
    scoreChecker() {
      let scores = this.scores;
      let lulus = 0;
      let tidakLulus = 0;

      for(let i = 0; i < scores.length; i++) {
          if(scores[i] >= 75){
              lulus += 1;
          } else {
              tidakLulus += 1;
          }
      }
      return {lulus, tidakLulus};
    }
  }
  
  module.exports = Students;
  
  