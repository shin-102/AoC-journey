// --- Day 3 : Mull It Over ---

function Mul(X: number, Y: number): number {
    return X * Y;
}

const input = await Deno.readTextFile("AoC-d3.txt");
//* text case part 1 : const input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
//* text case part 2 : const input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

  let pattern = /mul\((\d{1,3}),(\d{1,3})\)/gi;
  // Mul + ( + Group of (X,Y) as found[0] + X as found[1] + Y as found[2] + )

  pattern = /(do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\))/gi ;
  // Do() OR Don't() as found[0] +  Mul + ( + Group of (X,Y) as found[1] + X as found[2] + Y as found[3] + )
  
  const found = [...input.matchAll(pattern)];
  let sum : number = 0
  let enabled : boolean | null = null ; // track state

  found.forEach(match => {
    const enabler = match[0];
    //console.log(enabled);

    if (enabler === "do()") { enabled = true ;  } // Multiplication will occur
    else if (enabler === "don't()") { enabled = false ; } // Multiplication will NOT occur
    else if (enabler.startsWith("mul(")) {
      const X = parseInt(match[2], 10); // updated from match[1] to match[2]
      const Y = parseInt(match[3], 10);  // updated from match[2] to match[3]

      if (enabled === null) {
          enabled = true; // Assume enabled for the first multiplication, because without do/don't, it skips first Mul()
      }

      if (enabled) {
        const res = Mul(X,Y);
        sum += res ; 
        
      // console.log(`Full match: ${match[0]}`); 
      // console.log(`X: ${match[1]}, Y: ${match[2]}`);         
      } else {
      //console.log(`Skipped: ${match[0]} because it's disabled.`);
      }
    } 
  });

  console.log(`Total Sum: ${sum}`); // Log the total sum
  //* part one answer : 179834255
  //* part two answer : 80570939