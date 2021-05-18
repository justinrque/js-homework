function onlyVowelsOf(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  var characters = string.split('');
  var vowelsFound = [];

  for (var index in characters) {
    if (vowels.includes(string[index])) {
      vowelsFound.push(string[index]);
    }
  }
  console.log(vowelsFound.join(''));
}

onlyVowelsOf('Hello World');
onlyVowelsOf('Goodbye World');
