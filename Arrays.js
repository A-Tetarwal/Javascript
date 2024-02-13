let marks = [97, 82, 75, 64, 36];
marks[1]=85; // updating
console.log(marks);

let length=0;
for (const anum of marks) {  // normal iteration se bhi kr skte h;
    console.log(`marks: ${anum}`);
    length++;
}
console.log(`length is: ${length}`);

let string= "Jaani";
console.log(string.toUpperCase());