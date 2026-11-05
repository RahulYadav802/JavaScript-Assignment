/*
Student Name: Rahul Yadav
Student Id:-BCS2025374
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 6
Task Number: 2
*/

// Task 2: Parse valid JSON text using JSON.parse
const jsonText = '{"city":"Pune","pin":411001}';

const parsedData = JSON.parse(jsonText);
console.log(parsedData.city);
