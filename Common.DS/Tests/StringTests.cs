using Common.DS.StringProblems;
using System;
using System.Collections.Generic;
using System.Text;

namespace Common.DS.Tests
{
    public class StringTests
    {
        public static void TestAll()
        {
            Console.WriteLine("Test All String");

            ProblemSet01.prb1_AppendCharacters_Test("coaching", "coding", 4);
            ProblemSet01.prb1_AppendCharacters_Test("abcd3", "a", 0);
            ProblemSet01.prb1_AppendCharacters_Test("z", "abcde", 5);

            Console.Clear();
            //prb2
            /*prob2_indexSum_worst
             * Input: nums = [2,7,11,15], target = 9
Output: [0,1]
            */
            ProblemSet01.prob2_indexSum_worst_Test(new int[] { 2, 7, 11, 15 }, 9, new int[] { 0, 1 });
            ProblemSet01.prob2_indexSum_worst_Test(new int[] { 3,2,4 }, 6, new int[] { 1, 2 });
            ProblemSet01.prob2_indexSum_worst_Test(new int[] { 3, 3 }, 6, new int[] { 0, 1 });


        }


        public class StrCases
        {
            private string Answer { get; set; }

            public bool IsCorrect(string givenAnswer)
            {
                if(givenAnswer.Equals(Answer, StringComparison.CurrentCultureIgnoreCase))
                {
                    Console.WriteLine("Passed!");

                    return true;
                }
                Console.WriteLine("FALED: Expected [{0}] but got [{1}]", Answer, givenAnswer);
                return false;
            
            }
        }
    }
}
