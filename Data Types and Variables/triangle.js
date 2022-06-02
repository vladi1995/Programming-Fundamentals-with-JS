function triangle (a,b,c) {
    let p = (a+b+c)/2;
    let pa = p-a;
    let pb = p-b;
    let pc = p-c;
    let s = Math.sqrt(p*pa*pb*pc);
    console.log(s);
}

triangle(2,3.5,4);