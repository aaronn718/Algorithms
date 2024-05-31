using DataStructures.Structures;
using System;

namespace DataStructures
{
    class Program
    {
        static void Main(string[] args)
        {
            var command = 'c';
            Console.WriteLine("Traverse Heap!");
            var myHeap = new Heap { ShouldWriteToScreen = true };
            int[] unsortedArray =     new int[] { 5, 7, 3, 6, 2, 9, 10, 8, 4 };
            myHeap.createHeapFromHeap(new int[] { 1, 4, 2, 5, 8, 7, 3, 6, 9, 10 });

            //Console.WriteLine("value at index 5 is [{0}]", myHeap.ValueAt(5));
            //Console.WriteLine("Parent of index 5 is [{0}]", myHeap.ValueAt(myHeap.FindParentIndex(5)));
            //myHeap.PrintHeapAsTree();
            var level = 5;
            Console.WriteLine("Max nodes for level {0} is {1}", level, myHeap.MaxNodesForLevel(level));

            Console.WriteLine("\n\n");
            myHeap.PrettyPrint();
            while (command != 'q')
            {
                Console.WriteLine("Available commands: p, q, h");
                Console.WriteLine("Press 'q' to quit:");
                command = Console.ReadKey().KeyChar;

                switch(command)
                {
                    case 'h':
                        Console.WriteLine("heaptify test");
                        var heapC = Heap.Heaptify(unsortedArray);
                        heapC.PrettyPrint();

                        Console.WriteLine("\n\nTest Insert 1");
                        heapC.Insert(1);
                        heapC.PrettyPrint();
                        break;
                    
                    case 'p':
                        Console.WriteLine();
                        myHeap.GetHeap(true);
                        var childIndex = 0;
                        Console.WriteLine("Enter Child Index:");
                        var cindex = Console.ReadLine();
                        //no error check
                        int.TryParse(cindex, out childIndex);
                        Console.WriteLine("Value at index {0} is [{1}]", childIndex, myHeap.ValueAt(childIndex));
                        Console.WriteLine("Parent of index {0} is [{1}]", cindex, myHeap.ValueAt(myHeap.FindParentIndex(childIndex)));
                        break;


                    case 'q':
                        Console.WriteLine("Good Bye!");
                        break;
                    default:
                        Console.WriteLine("Invalid Command");
                        break;
                }
                

            }
        }

        
        

    }
}
