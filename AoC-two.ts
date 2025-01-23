//--- Day 2: Red-Nosed Reports ---

const input = await Deno.readTextFile("AoC-d2.txt");

// Split the input by newlines, filter out non-empty strings, and remove '\r'
const reports: string[] = input.split(/\n/)
    .filter(numStr => numStr.trim() !== "")
    .map(numStr => numStr.replace(/\r/g, "")); // Remove '\r' from each string


function SFW(): number {
    let safe: number = 0;

    for (let index = 0; index < reports.length; index++) {
        let report: number[] = reports[index].split(" ").map(Number);

        for (let i = 0; i < report.length; i++) {
            let temp = report[i]; 

            
            let modifiedReport = report.slice(0, i).concat(report.slice(i + 1));

            let increasing = true;
            let decreasing = true;

            for (let n = 0; n < modifiedReport.length - 1; n++) {
                let diff = modifiedReport[n + 1] - modifiedReport[n];

                if (Math.abs(diff) > 3 || diff === 0) {
                    increasing = false;
                    decreasing = false;
                    break;
                }

                if (modifiedReport[n] < modifiedReport[n + 1]) {
                    decreasing = false;
                } else if (modifiedReport[n] > modifiedReport[n + 1]) {
                    increasing = false;
                }
            }

            if ((increasing || decreasing) && (increasing !== decreasing)) {
                safe += 1;
                break; 
            }

            report[i] = temp;
        }
    }

    return safe;
}

console.log(SFW());