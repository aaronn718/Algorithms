using System;

namespace Common.DS
{
    public abstract class Sorts
    {
        public abstract void Sort(int[] myArray);
        public abstract string PrettyName();
        public void PrintArray(int[] myArray, bool sorted)
        {
            var wordSorted = sorted ? "sorted" : "unsorted";
            Console.WriteLine("The {1} array using {0}", PrettyName(), wordSorted);
            for(int i = 0; i < myArray.Length; i++)
            {
                Console.Write("[{0}]", myArray[i]);
                if(i < (myArray.Length -1))
                {
                    Console.Write(" ");
                }
            }

            Console.WriteLine("\n");
        }
    }

    public class BubbleSort : Sorts
    {
        public override void Sort(int[] myArray)
        {
            //obviously wrong
            myArray[0] = 99;
        }
        public override string PrettyName()
        {
            return "Bubble Sort";
        }
    }
}
