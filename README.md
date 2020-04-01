# Family Binary Tree

family-binary-tree is a JavaScript library for creating and manipulating hierarchical binary tree structures.

![Imgur](https://i.imgur.com/SRJiZk2.png)

# Live Demo

Check out the live demo here: https://soemxui195.github.io/family-binary-tree/
# Installation

The easiest way to use Family Binary Tree is to install it from NPM and include it in your own React build process.

__NPM__
```
npm install family-binary-tree
```
__YARN__
```
yarn add family-binary-tree
```

# Usage

Require the BinaryTree component and render it with JSX:

```
import React, { Component } from "react";

import BinaryTree from "family-binary-tree";

const data = [
  {
    id: 1,
    left_child_id: 2,
    right_child_id: 3,
    username: "User 1",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 2,
    left_child_id: 4,
    right_child_id: 5,
    username: "User 2",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 3,
    left_child_id: 6,
    right_child_id: null,
    username: "User 3",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 4,
    left_child_id: 7,
    right_child_id: 8,
    username: "User 4",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 5,
    left_child_id: null,
    right_child_id: null,
    username: "User 5",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 6,
    left_child_id: null,
    right_child_id: null,
    username: "User 6",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 7,
    left_child_id: 9,
    right_child_id: null,
    username: "User 7",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 8,
    left_child_id: null,
    right_child_id: 10,
    username: "User 8",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 9,
    left_child_id: null,
    right_child_id: null,
    username: "User 9",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 10,
    left_child_id: null,
    right_child_id: null,
    username: "User 10",
    image: "https://i.imgur.com/yzUDPMJ.png"
  }
];
class App extends Component {
    render(){
        <div>
            <BinaryTree
                allUsers={data}
                rootUser={data[0]}
                bgSideBar={'#333'}
                colorText={'#333'}
                colorSideBar={'#fff'}
                // imageFake={'https://imgur.com/PE0P672.png'}
                // nameFake={'undefined'}  
                // bgButton={'blue'}
                // colorButton={'black'}
                // disableSideBar
                // disableNavigation
                // renderNode={user=>{
                //   return (<div>Node</div>);
                // }}
                // renderDetail={user => {
                //   return <div>User</div>;
                // }}
            />
        </div>
    }
}

render(<App />, document.getElementById('app'))
```

# API

| Property | Description | Type | Default |
| ------ | ----------- | ------| -------|
|  allUsers  | TreeNodes data Array, 3 required fields `id`, `left_child_id`, `right_child_id`. With `id` as root, `left_child_id` and `right_child_id` are 2 child branches  | array\<{ id, left_child_id, right_child_id }> | - |
| rootUser | Choose the root of a binary tree | array[0] | - |
| maxDeep | Stratification level of the tree. Maximum of 4 | number | - |
| disableSideBar | Disables the sidebar of the binary tree | boolean | false |
| disableNavigation | Disables the navigation button of the binary tree | boolean | false |
| imageFake | Customize image data null of the binary tree | string | - |
| nameFake | Customize name text data null of the binary tree | string | - |
| renderNode | Customize node of the binary tree | Function | - |
| renderDetail | Customize detail node of the binary tree | Function | - |
| colorText | Color of the text Node | string | - |
| bgSideBar | Background color of the sidebar | string | - |
| colorSideBar | Color of the sidebar | string | - |
| bgButton | Background color of the navigation button | string | - |
| colorButton | Color of the navigation button | string | - |


