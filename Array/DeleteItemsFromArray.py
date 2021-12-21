# Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

# Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

# Return k after placing the final result in the first k slots of nums.

# Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

# Input: nums = [0,1,2,2,3,0,4,2], val = 2
# Output: 5, nums = [0,1,4,0,3,_,_,_]
# Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
# Note that the five elements can be returned in any order.
# It does not matter what you leave beyond the returned k (hence they are underscores).

from typing import List


def removeElement(nums: List[int], val: int) -> int:
    totalLen = len(nums);
    replaceIndex = len(nums) -1;
    replaceDone = False;
    for index in range(len(nums)):
        if nums[index] == val:
            replaceDone = False;
            totalLen -= 1;
            # nums[index] = "_";
            while replaceDone == False and index < replaceIndex:
                if not(nums[replaceIndex] == val or nums[replaceIndex] == '_'):
                    nums[index] = nums[replaceIndex];
                    nums[replaceIndex] = '_'
                    replaceDone = True;
                replaceIndex -= 1;
                if(replaceIndex <= 0):
                    replaceDone = True;
        

    print(nums);
    print(totalLen)

# removeElement([0,4,4,0,4,4,4,0,2],4)

removeElement([3,3],3)

