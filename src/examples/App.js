import React from "react";
import BinaryTree from "../lib";
import "./App.scss";

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
  },
];
const App = () => (
  <div
    style={{
      maxWidth: "1140px",
      width: "100%",
      margin: "0 auto",
      padding: "0 auto"
    }}
  >
    <h1>Demo Tree - By Tùng Vũ</h1>
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
);

export default App;
