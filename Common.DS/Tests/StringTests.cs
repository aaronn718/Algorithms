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
            //public StrCases(int length, bool easy)
            //{
            //    if (easy)
            //    {
            //        Unsorted = new int[10] { 5, 7, 3, 6, 1, 2, 9, 10, 8, 4 };
            //        Answer = new int[10] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            //        return;
            //    }

            //    Answer = new int[length];
            //    Unsorted = new int[length];
            //    Random rnd = new Random();
            //    for (int i = 0; i < length; i++)
            //    {
            //        Answer[i] = Unsorted[i] = rnd.Next(0, 100);
            //    }

            //    var sort = new Common.DS.BubbleSort();

            //    sort.Sort(Answer);
            //}
            private string Answer { get; set; }
            //private int[] Unsorted { get; set; }

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
