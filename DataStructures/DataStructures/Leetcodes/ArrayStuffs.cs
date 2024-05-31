using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Leetcodes
{
    public class ArrayStuffs
    {
        public static void Merge(int[] nums1, int m, int[] nums2, int n)
        {
            //sort array 1 bigo m
            //sort array 2  bigo n

            //or we can put both into narray 1 an sort it.
            //or what if we put it in a bucket represent numbers, but it's so big we don't want to do that.
            int[] nums3 = new int[m + n];
            int j = 0;
            int k = 0;
            for (int i = 0; i < m + n; i++) //big o of n + m
            {
                //we could create a new array here
                // j = nums1 inc
                //k = nums2 inc
            
                if(j >= m)
                {
                    nums3[i] = nums2[k];
                    k++;
                    continue;

                }
                if(k >= n)
                {
                    nums3[i] = nums1[j];
                    j++;
                    continue;
                }

                if(nums1[j] <= nums2[k]) //the first array was smaller
                {
                    nums3[i] = nums1[j];
                    j++;
                }
                else
                {
                    nums3[i] = nums2[k];
                    k++;
                }
            }

            //now we can put it back replacing nums1, results is going to be BigO(2*(n+m)) = BigO(n+m)
            for (int i = 0; i < m + n; i++)
            {
                nums1[i] = nums3[i];
            }
        }

        /*
         You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
        */

        public string MergeAlternately(string word1, string word2)
        {
            //basically create an array that can itterate both words alternatively
            int totalChars = word1.Length + word2.Length;
            char[] wa1 = word1.ToCharArray();
            char[] wa2 = word2.ToCharArray();
            int j = 0;
            int k = 0;
            char[] result = new char[totalChars];
            bool turnSW1 = true;
            for (int i = 0; i < totalChars; i++)
            {
                if (turnSW1)
                {
                    result[i] = wa1[j];
                    j++;

                }
                else
                {
                    result[i] = wa2[k];
                    k++;
                }

                if (j >= word1.Length)
                {
                    turnSW1 = false;
                }

                if (k >= word2.Length)
                {
                    turnSW1 = true;
                }

                if (j < word1.Length && k < word2.Length)
                {
                    turnSW1 = !turnSW1;
                }

            }

            return new string(result);

        }

    }


}
