using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Structures
{
    public interface ITree
    {
        public int Peek();
        public void Insert(int val);
        public int FindMax();
        public int FindMin();
        public int Size();
        
    }

    public class TreeNode
    {
        public TreeNode(int value, TreeNode parent, TreeNode lnode, TreeNode rnode)
        {
            Value = value;
            Parent = parent;
            LNode = lnode;
            RNode = rnode;
        }

        public TreeNode Parent { get; set; }
        public TreeNode LNode { get; set; }
        public TreeNode RNode { get; set; }
        public int Value { get; set; }


        public void PrintPretty(string indent, bool last, bool first = false)
        {
            Console.Write(indent);
            if (last)
            {
                Console.Write("//----");
                indent += "     ";
            }
            else if(!first)
            {
                Console.Write(" |----");
                indent += " |    ";
            }
            Console.WriteLine("[{0}]",Value);

            //var childrenCount = 0;
            //if (LNode != null)
            //    childrenCount++;
            //if (RNode != null)
            //    childrenCount++;


            //for (int i = 0; i < Children.Count; i++)
            //    Children[i].PrintPretty(indent, i == Children.Count - 1);

            

            if (RNode != null)
            {
                RNode.PrintPretty(indent, RNode == null);
            }
            if (LNode != null)
            {
                LNode.PrintPretty(indent, RNode == null);
            }

        }
    }
    public class Tree
    {
        private int size = 0;
        public TreeNode Root = null;
        public Tree()
        {
            size = 0;
            Root = null;
        }

        public void PrintPretty()
        {
            if (Root != null)
                Root.PrintPretty("       ", false, first: true);
        }

        public Tree(int rootValue)
        {
            size = 1;
            Root = new TreeNode(rootValue, null, null, null);
        }

        public Tree(TreeNode root)
        {
            size = 1;
            Root = root;
        }

        public Tree CreateHeap(int[] source, int size)
        {
            //assume heap is good
            Tree tree = null;
            TreeNode[] nodesArray = new TreeNode[size];
            for(int i = 0; i < size; i++)
            {
                var parentIndex = Heap.FindParentIndex(i, size);
                TreeNode parentNode = null;

                if(parentIndex > -1)
                {
                    parentNode = nodesArray[parentIndex];
                }

                nodesArray[i] = new TreeNode(source[i], parentNode, null, null);

                if(parentNode != null)
                {
                    //is node odd or even = left or right
                    if(i % 2 > 0)
                    {
                        parentNode.LNode = nodesArray[i];
                    }
                    else
                    {
                        parentNode.RNode = nodesArray[i];
                    }
                }
                else
                {
                    tree = new Tree(nodesArray[i]);
                }

            }
            return tree;
        }
        public void InsertAsMinHeap(int val)
        {
            //because I know the size of the root, i can find the position
            //cheat because typically, we don't use this as heap

            if(Root == null)
            {
                Root = new TreeNode(val, null, null, null);
                return;
            }
            else
            {
                var currentNode = Root;
                //create node
                TreeNode newNode = new TreeNode(val, currentNode, null, null);

                //size = index + 1
                //does parent have right node avail



                //if (newNode.Value < Root.Value)
                //{
                //    //swap
                //}else
                //{
                //    //get last node in order, and insert?
                //}


                if (currentNode.LNode == null)
                {
                    currentNode.LNode = newNode;
                    //heaptify?
                    return;
                }
                else if(currentNode.RNode == null)
                {
                    currentNode.RNode = newNode;
                    //heaptify
                    return;
                }
                else
                {
                    //both are full
                    //var pIndex = Heap.FindParentIndex(size - 1, size);
                    
                }
            }
        }


        public static int MaxNodesForLevel(int level)
        {
            if (level == 1)
            {
                return 1;
            }
            return MaxNodesForLevel(level - 1) * 2;
        }

        public List<int> TraverseInOrder()
        {
            return null;
        }

        public List<int> TraversePreOrder()
        {
            return null;
        }

        public List<int> TraversePostOrder()
        {
            return null;
        }

        public List<int> TraverseLevelOrder()
        {

            return null;
        }
    }
}
