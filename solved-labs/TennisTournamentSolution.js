function solution(P, C) {
 //Provide Your solution here 
 if (P / 2 > C) {
  return C;
 }
 if (P === C) {
  return P / 2;
 }
 if (P < C) {
  return Math.floor(P / 2);
 }
}

module.exports = solution;
