using System;
using System.Collections.Generic;
using System.Text;

namespace Common.DS.Tests
{
    public class SortTests
    {
        public static void TestAll()
        {
            //Console.WriteLine("Test sorts");
            var intCases = new IntCases(10, true);
            var unsorted = intCases.GetUnsorted();
            //bubble sort
            var sort = new Common.DS.BubbleSort();
            sort.PrintArray(unsorted, false);
            sort.Sort(unsorted);
            sort.PrintArray(unsorted, true);

            intCases.IsCorrect(unsorted);
            
        }
        
    }

    public class IntCases
    {
        public IntCases(int length, bool unique)
        {
            // Unsorted = new int[10] { 5, 7, 3, 6, 1, 2, 9, 10, 8, 4 };
            // Answer = new int[10] { 1,2,3,4,5,6,7,8,9,10};

            Answer = new int[length];
            Unsorted = new int[length];
            Random rnd = new Random();
            for(int i = 0; i < length; i++)
            {
                Answer[i] = Unsorted[i] = rnd.Next(0, 100);
            }

            var sort = new Common.DS.BubbleSort();
         
            sort.Sort(Answer);
        }
        private int[] Answer {get;set;}
        private int[] Unsorted {get;set;}
        
        //shallow coppy
        public int[] GetUnsorted()
        {
            var result = new int[Unsorted.Length];
            for (int i = 0; i < result.Length; i++)
            {
                result[i] = Unsorted[i];
            }

            return result;
        }
        public bool IsCorrect(int[] givenAnswer)
        {
            for(int i = 0; i < Unsorted.Length; i++)
            {
                if(Answer[i] != givenAnswer[i])
                {
                    Console.WriteLine("FALED: Expected [{0}] at position {1} but got [{2}]", Answer[i], i, givenAnswer[i]);
                    return false;
                }
            }

            Console.WriteLine("Passed!");

            return true;
        }
    }
}
