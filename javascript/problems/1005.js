export function problem (lines){
    const a = Number(lines[0]);
    const b = Number(lines[1]);
    const media = (a * 3.5 + b * 7.5)/11;

    console.log('MEDIA = ' + media.toFixed(5));
    
}