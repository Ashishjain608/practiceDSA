# You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

# Merge nums1 and nums2 into a single array sorted in non-decreasing order.

# The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

# Example 1:

# Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
# Output: [1,2,2,3,5,6]
# Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
# The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

from typing import List


def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    """
    Do not return anything, modify nums1 in-place instead.
    """
    finalList = []
    totalEl = m+n;
    mIndex = 0;
    nIndex = 0;
    onlyNum1 = nums1[0:m]
    print(onlyNum1);
    for index in range(totalEl):
        if(mIndex == m):
            finalList.append(nums2[nIndex]);
            nIndex = nIndex + 1;
            continue;
        elif (nIndex == n):
            finalList.append(onlyNum1[mIndex]);
            mIndex = mIndex + 1;
            continue;

        if onlyNum1[mIndex] <= nums2[nIndex]:
            finalList.append(onlyNum1[mIndex]);
            mIndex = mIndex +1;
        else:
            finalList.append(nums2[nIndex])
            nIndex = nIndex + 1;
    
    nums1 = finalList;
    print(finalList);
    print(nums1);

merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3);
# merge(nums1 = [0], m = 0, nums2 = [1], n = 1);