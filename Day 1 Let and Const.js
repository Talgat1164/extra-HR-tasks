function main() {
    let n = readLine()
    const PI = Math.PI; 
    console.log(PI * n * n)
    console.log(2 * PI * n)

    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}