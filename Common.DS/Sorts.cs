using System;

namespace Common.DS
{
    public abstract class Sorts
    {
        public abstract void Sort(int[] myArray);
    }

    public class BubbleSort : Sorts
    {
        public override void Sort(int[] myArray)
        {
            throw new NotImplementedException();
        }
        public static void PrettyName()
        {
            Console.WriteLine("I am Bubble Sort!");
        }
    }
}
