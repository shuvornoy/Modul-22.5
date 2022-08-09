/*
এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
*/
var onlyPositive = [22, 40, 6, 12, 3, 65, 7, 9, -89, 09, 99, 90, 103, 12];
function positiveNumber(array) {
    var positiveArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 >= 0) {
            positiveArray.push(array[i]);
        } else {
            break;
        }
    }
    return positiveArray;
}
var result = positiveNumber(onlyPositive);
console.log(result);