const questions = [

  {
    id: 0,

    question: "Are you guys ready for the quiz Level 2?",

    image: "",

    options: [
      "Yes"
    ],

    answer: "True",

    timer: 10
  },

  {
    id: 1,
    question: "What is the time complexity of the following code?\nlet s = \"\"; // string of length n\nfor(let i = 0; i < n; i++){\n  console.log(s.slice(i, n));\n}",
    image: "",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n^2)",
    timer: 60
  },

  {
    id: 2,
    question: "What is the maximum number of iterations required to search a number in a sorted array of size 10 using Binary Search?",
    image: "",
    options: ["3", "4", "5", "10"],
    answer: "4",
    timer: 60
  },
  {
    "id": 3,
    "question": "What is the space complexity of finding the sum of n natural numbers using recursion?",
    "image": "",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(logn)",
      "NOTA",
    ],
    "answer": "'O(n)'",
    "timer": 60
  },
  {
    "id": 4,
    "question": '"What is the height of the recursion tree in Merge Sort?"',
    "image": "",
    "options": [
      "O(n)",
      "O(logn)",
      "O(nlog)",
      "NOTA"
    ],
    "answer": "O(logn)",
    "timer": 60
  },
  {
    "id": 5,
    "question": "Which data structure can be used to sort elements based on their frequency in the best possible time complexity, and what is that complexity?",
    "image": "",
    "options": [
      "Set — O(n)",
      "HashMap — O(n*logn)",
      "HashMap — O(n^2)",
      "Array — O(n*log n)"
    ],
    "answer": "HashMap — O(n*logn)",
    "timer": 60
  },
  {
    "id": 6,
    "question": "When an array is in descending order, which sorting algorithm performs better in general?",
    "image": "",
    "options": ["Quick Sort", "Merge Sort", "Both same", "Insertion Sort"],
    "answer": "Merge Sort",
    "timer": 60
  },
  {
    "id": 7,
    "question": "How many swaps will be performed by Bubble Sort for the following array?\nlet arr = [5,9,0,2,7,1,4];",
    "image": "",
    "options": ["10", "12", "14", "16"],
    "answer": "12",
    "timer": 60
  },

];

export default questions;