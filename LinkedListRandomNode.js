/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
 var Solution = function(head) {
    this.list = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let length = this.list.length;
    console.log(this.list);
    console.log(length)
    let rand = Math.floor(Math.random() * length);
    return this.list[rand];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

 var solution = new Solution([1, 2, 3]);
 console.log(solution.getRandom()); // return 1
//  solution.getRandom(); // return 3