/*Replace the Substring for Balanced String
You are given a string containing only 4 kinds of characters 'Q', 'W', 'E' and 'R'.
A string is said to be balanced if each of its characters appears n/4 times where n is the length of the string.
Return the minimum length of the substring that can be replaced with any other string of the same length to make the original string s balanced.
Return 0 if the string is already balanced.

Example 1:
Input: s = "QWER"
Output: 0
Explanation: s is already balanc

Example 2:
Input: s = "QQWE"
Output: 1
Explanation: We need to replace a 'Q' to 'R', so that "RQWE" (or "QRWE") is balanced.

Example 3:
Input: s = "QQQW"
Output: 2
Explanation: We can replace the first "QQ" to "ER". 

Example 4:
Input: s = "QQQQ"
Output: 3
Explanation: We can replace the last 3 'Q' to make s = "QWER".
*/

//each char should be n/4

// each char should be repeaeted only N/4 times.

// function balancedString(str) {
//   let n = str.length;
//   let reqCharCount = n / 4;
//   let replaceCount = 0;

//   var charObjCount = {};

//   var charArr = str.split("");

//   charArr.forEach((c) => {
//     if (charObjCount[c]) {
//       charObjCount[c] = charObjCount[c] + 1;
//     } else {
//       charObjCount[c] = 1;
//     }
//   });

//   Object.keys(charObjCount).forEach((k) => {
//     replaceCount += charObjCount[k] - reqCharCount;
//   });

//   return replaceCount;
// }

// var re = balancedString("QQQQ");
// console.log(re);

/*
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
Input: head = 1->2->3->4->5
Output: 3->4->5
Explanation: The middle node of the list is node 3.
Input: head = 1->2->3->4->5->6
Output: 4->5->6
*/

let linkedList = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: {
          data: 5,
          next: {
              data: 6,
              next: null
          },
        },
      },
    },
  },
};

let slow = linkedList;
let fast = linkedList.next;

while (fast) {
  slow = slow.next;
  fast = fast && fast.next ? fast.next.next : null;
}

while (slow) {
  console.log(slow.data);
  slow = slow.next;
}
