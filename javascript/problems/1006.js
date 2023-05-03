export function problem (lines){
    const [A,B,C] = lines;
    const pesoNotaA =  2;
    const pesoNotaB =  3;
    const pesoNotaC =  5;

    const media = (A * pesoNotaA + B * pesoNotaB + C * pesoNotaC) / 10;

    console.log(`MEDIA = ${media.toFixed(1)}`);

    
}