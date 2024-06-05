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

            var prb1 = ProblemSet01.AppendCharacters("coaching", "coding");
            Console.WriteLine("Expecting: {0} Actual: {1}", 4, prb1);

            prb1 = ProblemSet01.AppendCharacters("abcde", "a");
            Console.WriteLine("Expecting: {0} Actual: {1}", 0, prb1);


            prb1 = ProblemSet01.AppendCharacters("z", "abcde");
            Console.WriteLine("Expecting: {0} Actual: {1}", 5, prb1);

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
