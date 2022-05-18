import { Difficulty } from './difficulty'
export interface LeetCodeQuestion {
  index: string
  name: string
  englishName: string
  desc: string
  link: string
  difficulty: Difficulty
  features: string[]
}
export const leetCodeQuestions: LeetCodeQuestion[] = [
  {
    index: '455',
    name: '分发饼干',
    englishName: ' Assign Cookies',
    desc: '假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。',
    link: 'https://leetcode.cn/problems/assign-cookies/',
    difficulty: Difficulty.Easy,
    features: ['贪心'],
  },
  {
    index: '135',
    name: '分发糖果',
    englishName: 'Candy',
    desc: '一群孩子站成一排，每一个孩子有自己的评分。现在需要给这些孩子发糖果，规则是如果一个孩子的评分比自己身旁的一个孩子要高，那么这个孩子就必须得到比身旁孩子更多的糖果；所有孩子至少要有一个糖果。求解最少需要多少个糖果。',
    link: 'https://leetcode.cn/problems/candy/',
    difficulty: Difficulty.Hard,
    features: ['贪心'],
  },
  {
    index: '435',
    name: '无重叠区间',
    englishName: 'Non Overlapping Intervals',
    desc: '给定多个区间，计算让这些区间互不重叠所需要移除区间的最少个数。起止相连不算重叠。',
    link: 'https://leetcode.cn/problems/non-overlapping-intervals/',
    difficulty: Difficulty.Medium,
    features: ['贪心'],
  },
  {
    index: '605',
    name: '种花问题',
    englishName: 'Can Place Flowers',
    desc: '假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。',
    link: 'https://leetcode.cn/problems/can-place-flowers/',
    difficulty: Difficulty.Easy,
    features: ['贪心'],
  },
  {
    index: '452',
    name: '用最少数量的箭引爆气球',
    englishName: 'Minimum Number of Arrows to Burst Balloons',
    desc: '一支弓箭可以沿着 x 轴从不同点 完全垂直 地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被 引爆 。可以射出的弓箭的数量 没有限制 。 弓箭一旦被射出之后，可以无限地前进。',
    link: 'https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/',
    difficulty: Difficulty.Medium,
    features: ['贪心'],
  },
  {
    index: '763',
    name: '划分字母区间',
    englishName: 'Partition Labels',
    desc: '字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。',
    link: 'https://leetcode.cn/problems/partition-labels/',
    difficulty: Difficulty.Medium,
    features: ['贪心'],
  },
  {
    index: '122',
    name: '买卖股票的最佳时机 II',
    englishName: 'Best Time to Buy and Sell Stock II',
    desc: '给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。',
    link: 'https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/',
    difficulty: Difficulty.Medium,
    features: ['贪心'],
  },
  {
    index: '406',
    name: '根据身高重建队列',
    englishName: 'Queue Reconstruction by Height',
    desc: '假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。',
    link: 'https://leetcode.cn/problems/queue-reconstruction-by-height/',
    difficulty: Difficulty.Medium,
    features: ['贪心', '排序'],
  },
  {
    index: '665',
    name: '非递减数列',
    englishName: 'Non-decreasing Array',
    desc: '给你一个长度为 n 的整数数组 nums ，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。',
    link: 'https://leetcode.cn/problems/non-decreasing-array/',
    difficulty: Difficulty.Medium,
    features: ['贪心'],
  },
  {
    index: '167',
    name: '两数之和 II - 输入有序数组',
    englishName: 'Two Sum II - Input array is sorted',
    desc: '给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。',
    link: 'https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/',
    difficulty: Difficulty.Medium,
    features: ['双指针'],
  },
  {
    index: '88',
    name: '合并两个有序数组',
    englishName: ' Merge Sorted Array',
    desc: '给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。',
    link: 'https://leetcode.cn/problems/merge-sorted-array/',
    difficulty: Difficulty.Easy,
    features: ['双指针'],
  },
  {
    index: '142',
    name: ' 环形链表 II',
    englishName: 'Linked List Cycle II',
    desc: '给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。',
    link: 'https://leetcode.cn/problems/linked-list-cycle-ii/',
    difficulty: Difficulty.Medium,
    features: ['双指针'],
  },
  {
    index: '76',
    name: '最小覆盖子串',
    englishName: 'Minimum Window Substring',
    desc: '给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。',
    link: 'https://leetcode.cn/problems/minimum-window-substring/',
    difficulty: Difficulty.Hard,
    features: ['双指针', '滑动窗口'],
  },

]
