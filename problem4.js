/*
একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।
*/

function bestFriend(array) {
    var defaultBigName = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i].length > defaultBigName.length) {
            defaultBigName = array[i];
        }
    }
    return defaultBigName;
}
var friendsName = ['Shuvo', 'Ariful', 'Lemon', 'Ovi', 'Ridoy'];
var result = bestFriend(friendsName);
console.log(result);

