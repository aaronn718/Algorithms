using System;
using System.Collections.Generic;
using System.Text;

namespace Common.DS.StringProblems
{
    public class ProblemSet01
    {
        /*
         You are given two strings s and t consisting of only lowercase English letters.

Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

 

Example 1:

Input: s = "coaching", t = "coding"
Output: 4
Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
Now, t is a subsequence of s ("coachingding").
It can be shown that appending any 3 characters to the end of s will never make t a subsequence.
Example 2:

Input: s = "abcde", t = "a"
Output: 0
Explanation: t is already a subsequence of s ("abcde").
Example 3:

Input: s = "z", t = "abcde"
Output: 5
Explanation: Append the characters "abcde" to the end of s so that s = "zabcde".
Now, t is a subsequence of s ("zabcde").
It can be shown that appending any 4 characters to the end of s will never make t a subsequence.
 

Constraints:

1 <= s.length, t.length <= 105
s and t consist only of lowercase English letters.




public class Solution {
    public int AppendCharacters(string s, string t) {
        
    }
}
 
        */

        public  static int prb1_AppendCharacters(string s, string t)
        {
            
            int count = 0;
            var combinedString = s;
            char[] arrS = s.ToCharArray();
            char[] arrT = t.ToCharArray();

            int indexT = 0;
            int indexS = 0;
            /*             
            if it match, move on
            if it doesn't match - only s move on
             */
            while (indexS < s.Length && indexT < t.Length)
            {
                char charAtT = t[indexT];
                
                if(charAtT == s[indexS])
                {
                    indexS++;
                    indexT++;
                }
                else
                {
                    indexS++;
                }
            }

            //at the end, we're not at the end of s, then wwe must append it
            if(indexT < t.Length)
            {
                combinedString = s + t.Substring(indexT);
                count = t.Length - indexT;
            }
            Console.WriteLine("{0} and {1} became: {2}", s, t, combinedString);

            return count;
        }

        public static void prb1_AppendCharacters_Test(string s, string t, int answer)
        {

            var prb1 = prb1_AppendCharacters(s, t);
            Console.WriteLine("Expecting: {0} Actual: {1}", answer, prb1);
        }

        /*
         Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
         */

        public static int[] prob2_indexSum_worst(int[] nums, int target)
        {
            var answer = new int[2];
            //strat - find anything that's matching the target or less than and keep it as 1 index
            int index1 = 0;
            int num1 = nums[index1];
            int index2 = 1;
            int num2 = nums[index2];

            //while(index1 < nums.Length)
            //{
            //    if(num1 > target)
            //    {

            //    }
            //}
            bool found = false;
            //let's do the n^2 answer first
            for(index1 = 0; found == false && index1 < nums.Length - 1; index1++)
            {
                for(index2 = 1; found == false && index2 < nums.Length; index2++ )
                {
                    if(nums[index1] + nums[index2] == target)
                    {
                        //break condition
                        Console.WriteLine("Found the pair at {0} amd {1}", index1, index2);
                        answer[0] = index1;
                        answer[1] = index2;
                        found = true;
                    }
                }
            }

            return answer;
        }
        public static void prob2_indexSum_worst_Test(int[] nums, int target, int[] answer)
        {

            var prob = prob2_indexSum_worst(nums, target);
            if(answer[0] == prob[0] && answer[1] == prob[1])
            {
                Console.WriteLine("PASSED: Answer [{0},{1}]", answer[0], answer[1], prob[0], prob[1]);
            }
            else
            {
                Console.WriteLine("FAILED: Expecting: [{0},{1}] Actual: [{2},{3}]", answer[0], answer[1], prob[0], prob[1]);
            }
            
        }
    }
}
