function vowelsAndConsonants2(s) {
    const vowels = [],
      consonants = [];
  
    for(const c of s){
      if('aeiou'.includes(c)){
        vowels.push(c);
      }else{
        consonants.push(c);
      }
    }
    console.log(vowels.join("\n"));
    console.log(consonants.join("\n"));
  }

vowelsAndConsonants2('javascript')