using NUnit.Framework;

namespace DataStructures.Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void TestMergeSortedArray_01()
        {
            var nums1 = new int[] { 1, 2, 3, 0, 0, 0};
            var nums2 = new int[] { 2, 5, 6};

            Leetcodes.ArrayStuffs.Merge(nums1, 3, nums2, 3);
            var answer = new int[] { 1, 2, 2, 3, 5, 6 };

            for(int i = 0; i < 6; i++)
            {
                Assert.IsTrue(nums1[i] == answer[i]);
            }
        }
    }
}