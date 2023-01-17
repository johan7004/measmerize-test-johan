/*

Task : sorted array to be in Tree Data structure

Different Ways to Run the code. 

1. open the index.html in a browser and see the output in browser console
2. navigate to the script directory and use node script.js to run code
3. using Vscode live-server extension and hosting this on local server

note: dynamic file input with similar input json or importing json from the file path will be beyond the scope of this task hence avoided such implementation

*/

"use-strict";

const sortNodes = (inputNode) => {
  const nodes = {}; // empty object to avoid mutation on input

  inputNode.forEach((node) => {
    // loop through the nodes to add children property to each node with nodeId
    nodes[node.nodeId] = {
      ...node,
      children: [],
    };
  });

  Object.values(nodes).forEach((node) => {
    if (node.parentId !== null) {
      // if the parentId is true the value will be pushed into chidlren,
      nodes[node.parentId].children.push(node);
    }
  });

  const output = Object.values(nodes).filter((node) => node.parentId === null); // filter parentId to be null and have it in the root

  return console.log(output);
};

const unSortedNodes = [
  {
    nodeId: "4",
    name: "Four",
    parentId: "2",
    previousSiblingId: "6",
  },
  {
    nodeId: "8",
    name: "Eight",
    parentId: "7",
    previousSiblingId: null,
  },
  {
    nodeId: "2",
    name: "Two",
    parentId: "1",
    previousSiblingId: null,
  },
  {
    nodeId: "6",
    name: "Six",
    parentId: "2",
    previousSiblingId: null,
  },
  {
    nodeId: "3",
    name: "Three",
    parentId: null,
    previousSiblingId: null,
  },
  {
    nodeId: "5",
    name: "Five",
    parentId: "4",
    previousSiblingId: null,
  },
  {
    nodeId: "7",
    name: "Seven",
    parentId: null,
    previousSiblingId: "1",
  },
  {
    nodeId: "1",
    name: "One",
    parentId: null,
    previousSiblingId: "3",
  },
];

sortNodes(unSortedNodes); // call the function
