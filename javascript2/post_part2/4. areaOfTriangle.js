const area = (s1, s2, s3) => {
    const s = (s1 + s2 + s3)/2; 
    console.log(Math.sqrt(s*(s-s1)*(s-s2)*(s-s3)));
}

area(5, 6, 7);