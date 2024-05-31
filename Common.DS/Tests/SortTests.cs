using System;
using System.Collections.Generic;
using System.Text;

namespace Common.DS.Tests
{
    public class SortTests
    {
        public static void TestAll()
        {
            Console.WriteLine("Test sorts");
            var intCases = new IntCases();
            var unsorted = intCases.IntArray_10();
            //bubble sort
            var sort = new Common.DS.BubbleSort();
            sort.Sort(unsorted);
            sort.PrintArray(unsorted);
        }

        public class IntCases
        {
            public int[] IntArray_10(bool answer = false)
            {
                if(answer)
                    return new int[10] { 1,2,3,4,5,6,7,8,9,10};

                return new int[10] { 5, 7, 3, 6, 1, 2, 9, 10, 8, 4 };
            }
        }
        
    }
}
