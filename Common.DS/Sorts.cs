using System;

namespace Common.DS
{
    public abstract class Sorts
    {
        public void Sort(int[] myArray)
        {
            try{
                DoSort(myArray);
            }catch(Exception ex)
            {
                Console.WriteLine("Error sorting with ex: {0}", ex.Message);
            }
        }
        protected abstract void DoSort(int[] myArray);
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

        public void PrintSubArray(int[] myArray, int start, int end)
        {
            for(int i = start; i <= end; i++)
            {
                Console.Write("[{0}]", myArray[i]);
                if(i < end)
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

/*
BigO(n^2) - loop through every element and shift the biggest down to the end of the array, then move up one position
*/
    public class BubbleSort : Sorts
    {

        protected override void DoSort(int[] myArray)
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

    /*
BigO(nLog(n)) -
Partition will return a pivot point index, it will then sort everything greather than it to right, and less than to left of it
exit point will be at 1 element
    */
    public class QuickSort : Sorts
    {
        public override string PrettyName()
        {
            return "Quick Sort";
        }

        protected override void DoSort(int[] myArray)
        {
            //partition once
            //var pIndex = Partition(myArray, 0, myArray.Length-1);
            //Console.WriteLine("PIndex {0}", pIndex);
            qSort(myArray, 0, myArray.Length - 1);
        }

        private void qSort(int[] myArray, int left, int right)
        {
            if(left < right)
            {
                //at this part, all the array was part to move bigger to right, and lesser to left
                var pIndex = Partition(myArray, left, right);
                //pIndex is already in place!
                qSort(myArray, left, pIndex - 1);
                qSort(myArray, pIndex + 1, right);

            }
            //left and right is same, so we don't do anything
        }

        private int Partition(int[] myArray, int left, int right)
        {
            //pivot starts at right (could be anywhere)
            var pIndex = left;
            var pValue = myArray[right]; //value of pivot

            for(int i = left; i < right; i++)
            {
                if(myArray[i] <= pValue) //for in duplication allow
                {
                    //swap it
                    Swap(myArray, pIndex, i);
                    pIndex++;
                }
            }
            //swap end w/ pindex
            Swap(myArray, pIndex, right);
            return pIndex;
        }
    }
}
