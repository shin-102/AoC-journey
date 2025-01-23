//--- Day 1: Historian Hysteria  ---

const input = await Deno.readTextFile("AoC-d1.txt");
const list: number[] = input.split(/\s+/)
    .filter(numStr => numStr.trim() !== "")
    .map(numStr => Number(numStr));


function TotalDist(): object | string {

    const LS1 : number[] = [];
    const LS2 : number[] = [];
    let Diff : number = 0 ;

    if ( list.length != 0 && list.length % 2 == 0 ) {
        //* Store input, take n into LS1 and n+1 into LS2
        
        for (let index = 0; index < list.length ; index++) {
            if ( index % 2 == 0 ) {
                LS2.push(list[index]);
            }
            else {
                LS1.push(list[index]);
            }
        }
        let score: number = 0;
        let simscore: number = 0;
        for (let i = 0; i < LS1.length; i++) {
            for (let j = 0; j < LS2.length; j++) {
                if ( LS1[i] == LS2[j] ) {
                    score += 1 ;
                }
            }
            simscore += LS1[i] * score ; 
            score = 0;
        }

        //* Sort newly stored data from smallest to biggest
        //console.log(LS1, LS2) ;
        LS1.sort((a, b) => a - b);
        LS2.sort((a, b) => a - b);

        //* compare i from LS1 with j from LS2, add up the difference into a variable DIST

        for (let i = 0; i < LS1.length; i++) {
                Diff += Math.abs(LS1[i] - LS2[i]) ;
        }

        
        return [Diff, simscore];        
    }
    else {
        return "list incomplete"
    };
}
console.log(TotalDist());
