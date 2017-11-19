// Had to use java because my solution in javascript exceed time limit during execution...
// Will find a better way of doing this.
public class Solution {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int kthsmallest(final int[] A, int B) {
        return kthSmall(A, B, 0, A.length-1);
    }
    public static int kthSmall(int[] a, int k, int start, int end){
        int j = start;
        int i = j-1;
         
        int pivot = a[end];
         
        for(;j<end;j++){
            if(a[j] < pivot){
                i++;
                swap(a, i, j);
            }
        }

        i++;
        swap(a, i, end);

        int small = i-start+1;
        if(small == k){
            return a[i];
        }else if(small > k){
            return kthSmall(a, k, start, i-1);
        }else{   //small is less than k
            return kthSmall(a, k-small, i+1, end);
        }
    }
     
    public static void swap(int[] a, int i, int j){
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}