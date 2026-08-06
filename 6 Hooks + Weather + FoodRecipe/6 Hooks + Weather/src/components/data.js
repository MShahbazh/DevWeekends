const accordian=[
  {
    key: 1,
    title: "What is React?",
    subject: "React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience. It lets you compose complex UIs from small, isolated pieces of code called components."
  },
  {
    key: 2,
    title: "What is the Virtual DOM?",
    subject: "The Virtual DOM is a lightweight copy of the actual DOM kept in memory. React uses it to figure out the minimal set of changes needed to update the real DOM, which makes updates faster than manipulating the DOM directly on every change."
  },
  {
    key: 3,
    title: "What are Hooks?",
    subject: "Hooks are functions that let you use state and other React features in functional components, without writing a class. Common hooks include useState for local state, useEffect for side effects, and useRef for persistent mutable values."
  },
  {
    key: 4,
    title: "What is JSX?",
    subject: "JSX is a syntax extension for JavaScript that looks similar to HTML. It lets you write markup directly inside your JavaScript code, which gets compiled down to regular function calls like React.createElement under the hood."
  },
  {
    key: 5,
    title: "What is Tailwind CSS?",
    subject: "Tailwind CSS is a utility-first CSS framework that lets you style elements by applying small, single-purpose classes"
  
}
];

const slider = [
  { key: 1, image: "https://picsum.photos/id/1015/800/400" },
  { key: 2, image: "https://picsum.photos/id/1018/800/400" },
  { key: 3, image: "https://picsum.photos/id/1043/800/400" },
  { key: 4, image: "https://picsum.photos/id/1039/800/400" },
  { key: 5, image: "https://picsum.photos/id/1036/800/400" }, 
];

const tree = [
  {
    key: 1,
    name: "Documents",
    children: [
      {
        key: 2,
        name: "Work",
        children: [
          { key: 3, name: "Resume.pdf", children: [] },
          { key: 4, name: "Project Report.docx", children: [] },
        ],
      },
      {
        key: 5,
        name: "Personal",
        children: [
          { key: 6, name: "Passport.pdf", children: [] },
          {
            key: 7,
            name: "Photos",
            children: [
              { key: 8, name: "Vacation.jpg", children: [] },
              { key: 9, name: "Family.png", children: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 10,
    name: "Downloads",
    children: [
      { key: 11, name: "Setup.exe", children: [] },
      { key: 12, name: "Movie.mp4", children: [] },
    ],
  },
  {
    key: 13,
    name: "Music",
    children: [
      { key: 14, name: "song1.mp3", children: [] },
      { key: 15, name: "song2.mp3", children: [] },
    ],
  },
];


export {accordian,slider,tree}