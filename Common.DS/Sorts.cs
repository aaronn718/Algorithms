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

            Console.WriteLine("");
        }

        public void Swap(int[] myArray, int position1, int position2)
        {
            var temp = myArray[position1];
            myArray[position1] = myArray[position2];
            myArray[position2] = temp;
        }
    }

    public class BubbleSort : Sorts
    {
        public override void Sort(int[] myArray)
        {
            int count = 0;
            //obviously wrong
            //myArray[0] = 99;

            for(int i = 0; i < myArray.Length; i++)
            {
                for(int j = (i+1); j < myArray.Length; j++) 
                {
                    if(myArray[i] > myArray[j])
                    {
                        //swap it
                        Swap(myArray, i, j);
                        count++;
                    }
                }
            }
            //Console.WriteLine("Looked at {0} elements", count);
        }
        public override string PrettyName()
        {
            return "Bubble Sort";
        }
    }
}
