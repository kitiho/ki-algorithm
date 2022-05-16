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

]
