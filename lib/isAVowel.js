'use strict';

var isAVowel = function(lttr){
  // your code goes here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(lttr.toLowerCase());

};

module.exports = isAVowel;
