// --- Day 3 : Mull It Over ---

function Mul(X: number, Y: number): number {
    return X * Y;
}

const input = await Deno.readTextFile("AoC-d3.txt");
//const input = "someRandomTextMul(12,34)moreTextMul(5,6)andMul(7,8)";
//const input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

  const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;
  // Mul + ( + Group of (X,Y) as found[0] + X as found[1] + Y as found[2] + )
  const found = [...input.matchAll(pattern)];
  let sum : number = 0

  found.forEach(match => {
    const X = parseInt(match[1], 10);
    const Y = parseInt(match[2], 10);
    
    const res = Mul(X,Y);
    sum += res ;

    //console.log(`Full match: ${match[0]}`); // The full "Mul(X,Y)" string
    //console.log(`X: ${match[1]}, Y: ${match[2]}`); // The captured groups
  });

  console.log(`Total Sum: ${sum}`); // Log the total sum


