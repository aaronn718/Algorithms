public class QuickSort
{
    public QuickSort()
    {}

    public static void say(string message)
    {
        Console.WriteLine(message);
    }

//takes in an array of stuffs and sort it
    public static void Sort(int[] myArray)
    {
       
    }

    private static int partiton(int startIndex, int endIndex, int[] myArray)
    {
        return 0;
    }

    private static void doSort(int l, int r, int[] myArray)
    {
        if(l < r)
        {
            int mid = (l + r) / 2; //pivot
            while(myArray[l] < myArray[mid])
            {
                l++;
            }
        }   
    }
}