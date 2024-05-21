"use strict";
class School {
    addStudent(stdObj) {
        this.student.push(stdObj);
    }
    addTeacher(tchObj) {
        this.Teachers.push(tchObj);
    }
    constructor(name) {
        this.student = [];
        this.Teachers = [];
        this.name = name;
    }
}
class Student {
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class teachers extends Student {
}
let school1 = new School("MPS thari");
let school2 = new School("IQRA thari");
let school3 = new School("OXFORD thari");
let s1 = new Student("Faiza", 15, school1.name);
let s2 = new Student("Mutahar", 13, school2.name);
let s3 = new Student("Farman", 12, school3.name);
let t1 = new teachers("GMB", 24, school1.name);
let t2 = new teachers("Tahir", 22, school2.name);
let t3 = new teachers("Mudasir", 19, school3.name);
// console.log(school1);
//  console.log(school2);
//  console.log(school3);
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
// console.log(t1);
// console.log(t2);
// console.log(t3);
console.log(school1);
console.log(school2);
console.log(school3);
