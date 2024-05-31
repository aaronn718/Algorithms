using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Structures
{
    /*
     find-max (or find-min): find a maximum item of a max-heap, or a minimum item of a min-heap, respectively (a.k.a. peek)
insert: adding a new key to the heap (a.k.a., push[4])
extract-max (or extract-min): returns the node of maximum value from a max heap [or minimum value from a min heap] after removing it from the heap (a.k.a., pop[5])
delete-max (or delete-min): removing the root node of a max heap (or min heap), respectively
replace: pop root and push a new key. This is more efficient than a pop followed by a push, since it only needs to balance once, not twice, and is appropriate for fixed-size heaps.[6]
Creation
create-heap: create an empty heap
heapify: create a heap out of given array of elements
merge (union): joining two heaps to form a valid new heap containing all the elements of both, preserving the original heaps.
meld: joining two heaps to form a valid new heap containing all the elements of both, destroying the original heaps.
Inspection
size: return the number of items in the heap.
is-empty: return true if the heap is empty, false otherwise.
Internal
increase-key or decrease-key: updating a key within a max- or min-heap, respectively
delete: delete an arbitrary node (followed by moving last node and sifting to maintain heap)
sift-up: move a node up in the tree, as long as needed; used to restore heap condition after insertion. Called "sift" because node moves up the tree until it reaches the correct level, as in a sieve.
sift-down: move a node down in the tree, similar to sift-up; used to restore heap condition after deletion or replacement.
     */
    public class Heap : ITree
    {
        private int[] heapValues = null;
        private int heapSize = 0;
        public bool ShouldWriteToScreen = false;

        public Heap()
        {
            heapValues = new int[0];
            heapSize = 0;
        }

        public Heap(int[] values)
        {
            heapValues = new int[values.Length];
            //shadow copy
            for(int i = 0; i < values.Length; i++)
            {
                heapValues[i] = values[i];
            }
            heapSize = values.Length;

            //heaptify? No
        }

        /*
        find-max (or find-min): find a maximum item of a max-heap, or a minimum item of a min-heap, respectively (a.k.a. peek)
        insert: adding a new key to the heap (a.k.a., push[4])
        */
        public int Peek()
        {
            throw new NotImplementedException();
        }

        public int FindMax()
        {
            throw new NotImplementedException();
        }

        public int FindMin()
        {
            return heapValues[0];
        }

        public void Insert(int val)
        {
            //protect against null -> bleh
            //clone heap
            heapSize++;
            var newHeap = new int[heapSize];
            for(int i = 0; i < heapSize-1; i++)
            {
                newHeap[i] = heapValues[i];
            }
            newHeap[heapSize - 1] = val;
            
            heapValues = newHeap;
            this.sort(heapSize - 1);

        }

        public void PrettyPrint()
        {
            var heapTree = new Tree().CreateHeap(heapValues, heapSize);
            heapTree.PrintPretty();
        }

        //shaddow copy of current heap
        public int[] GetHeap(bool shouldPrint)
        {
            var ret = new int[heapSize];
            for (int i = 0; i < heapSize; i++)
                ret[i] = heapValues[i];

            if (shouldPrint)
            {
                Console.WriteLine("Current Heap is");
                for (int i = 0; i < heapSize; i++)
                {
                    Console.Write("[{0}] ", heapValues[i]);
                }
                Console.WriteLine();
            }

            return ret;
        }

        public int Size()
        {
            return heapSize;
        }

        public void createHeapFromHeap(int[] heap)
        {
            heapSize = 0;
            heapValues = new int[heap.Length];
            for (int i = 0; i < heap.Length; i++)
            {
                heapValues[i] = heap[i];
                heapSize++;
            }

            if (ShouldWriteToScreen)
            {
                GetHeap(true);
            }
        }




        #region Helpers
        public int FindParentIndex(int childIndex)
        {
            return FindParentIndex(childIndex, heapSize);
        }

        public static int FindParentIndex(int childIndex, int heapsize)
        {
            if (childIndex < 0 || childIndex >= heapsize)
                return -1;

            if (childIndex == 0)
                return 0;

            //2P + 1 = C and 2P+2 = C
            //if it doesn't divide evently, don't use, use ones that does
            var remainder = (childIndex - 1) % 2;
            if (remainder == 0)
                return (childIndex - 1) / 2;

            return (childIndex - 2) / 2;
        }

        public int MaxNodesForLevel(int level)
        {
            if (level == 1)
            {
                return 1;
            }
            return MaxNodesForLevel(level - 1) * 2;
        }

        public int ValueAt(int index)
        {
            if ((index + 1) > heapSize)
                return -1;


            return heapValues[index];
        }

        public static Heap Heaptify(int[] values)
        {
            var retValue = new Heap(values);
            retValue.sort();

            return retValue;
        }

        private void sort(int startIndex = 0)
        {
            for(int i = startIndex; i<heapValues.Length; i++)
            {
                swap(i, heapValues[i]);
            }
        }


        public void swap(int currentIndex, int currentValue)
        {
            if (currentIndex < 1)
            {
                //heapValues[currentIndex] = currentValue;
                return;
            }

            //var value = heapValues[currentIndex];
            var parentIndex = FindParentIndex(currentIndex);
            var parentValue = heapValues[parentIndex];

            if(currentValue < parentValue)
            {
                //swap
                heapValues[currentIndex] = parentValue;
                heapValues[parentIndex] = currentValue;
                //continue up recursively
                swap(parentIndex, currentValue);
            }
            
        }

    
        #endregion
    }
}
