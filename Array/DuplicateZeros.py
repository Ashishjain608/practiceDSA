# Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

# Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

def duplicateZeros(arr):
    index = 0;
    arrLen = len(arr);
    skip = False;
    for item in arr:
        if(skip == True):
            skip = False;
            continue;
        if (index < arrLen-1 and arr[index] == 0):
            for num in range(arrLen-1, index, -1) :
                arr[num] = arr[num-1];
            arr[index+1] = 0;
            index = index + 1;
            skip = True
            print(arr);
        index = index + 1;

duplicateZeros(arr=[1,0,2,3,0,4,5,0])