//Week 2 - Day 4
//Daily challenge

// Prompt the user for several words (separated by commas).
let word = prompt("Enter your list of words by putting commas between the wordss");

//Put the words in a table.
let wordtab = word.split(",");

//Console.log the words one per line, in a rectangular box as shown below.
let maxLength = 0;

let Star = '';

wordtab.forEach((item)=>{

    if(maxLength < item.length)
    {
        maxLength = item.length
    }
});

maxStartLength = maxLength + 4;
Star +=   "*".repeat(maxStartLength);
Star += "\n";
let space = '';

 for(let index=0; index < wordArray.length; index++)
{
    let spaceNumber = maxStartLength - wordArray[index].length - 3 ;
    space = ' '.repeat(spaceNumber)

    Star +=  "* " + wordArray[index] + space + "* \n";
}

Star = Star + "*".repeat(maxStartLength);

 console.log(Star);