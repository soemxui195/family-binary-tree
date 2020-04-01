import React from "react";
import BinaryTreeNode from "./BinaryTreeNode";
import { FaChevronUp, FaAngleDoubleUp, FaArrowDown } from "react-icons/fa";
import "./BinaryTree.scss";

export default class BinaryTree extends React.Component {
  // goToTop() {
  //   this.setState({
  //     selectedUser: this.props.rootUser,
  //     selectedUserLevel: 0,
  //   });
  // };
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: props.rootUser,
      selectedUserLevel: 0
    };
  }
  render() {
    const {
      allUsers = [],
      maxDeep,
      renderDetail,
      renderNode,
      disableNavigation = false,
      disableSideBar = false,
      bgSideBar = '#00b6eb',
      colorSideBar = '#ffffff',
      colorText,
      bgButton = '#808285',
      colorButton = '#ffffff'
    } = this.props;
    let rootUser = this.state.selectedUser;
    let selectedUserLevel = this.state.selectedUserLevel;
    const goToTop = () => {
      this.setState({
        selectedUser: this.props.rootUser,
        selectedUserLevel: 0
      });
    };
    const goToBottomLeft = () => {
      let user = rootUser;
      let level = selectedUserLevel;
      while (user && user.left_child_id) {
        user = allUsers.find(item => item.id === user.left_child_id);
        level++;
      }
      if (user) {
        this.setState({ selectedUser: user, selectedUserLevel: level });
      }
    };
    const goToBottomRight = () => {
      let user = rootUser;
      let level = selectedUserLevel;
      while (user && user.right_child_id) {
        user = allUsers.find(item => item.id === user.right_child_id);
        level++;
      }
      if (user) {
        this.setState({ selectedUser: user, selectedUserLevel: level });
      }
    };
    const upOneLevel = () => {
      const user = [...this.props.allUsers, this.props.rootUser].find(
        item =>
          item.left_child_id === this.state.selectedUser.id ||
          item.right_child_id === this.state.selectedUser.id
      );
      console.log("up one level", user);
      if (user) {
        this.setState({
          selectedUser: user,
          selectedUserLevel: selectedUserLevel - 1
        });
      }
    };
    const onClickUser = (userId) => {
      const user = allUsers.find(item => item.id === userId);
      console.log('Click user', user);
      if(user){
        let level = 0;
        let currentUser = user;
        while(currentUser){
          currentUser=this.props.allUsers.find(
            (user) =>
              user.left_child_id === currentUser.id ||
              user.right_child_id === currentUser.id,
          );
          level++;
        }
        this.setState({
          selectedUser: user,
          selectedUserLevel: level,
        });
      }
    }
    return (
      <div id="binary-tree" className="Treant" style={{ height: "800px" }}>
        {
          (selectedUserLevel,
          disableSideBar, bgSideBar, colorSideBar && (
            <div className="leftSidebar" style={{display: disableSideBar ? 'none' : 'block' }}>
              <div className="levels-wrap">
                <div className="level level-0" style={{backgroundColor: bgSideBar}}>
                  <span className="level-label" style={{color: colorSideBar}}>Level {selectedUserLevel}</span>
                </div>
                <div className="level level-1" style={{backgroundColor: bgSideBar}}>
                  <span className="level-label" style={{color: colorSideBar}}>
                    Level {selectedUserLevel + 1}
                  </span>
                </div>
                <div className="level level-2" style={{backgroundColor: bgSideBar}}>
                  <span className="level-label" style={{color: colorSideBar}}>
                    Level {selectedUserLevel + 2}
                  </span>
                </div>
                <div className="level level-3" style={{backgroundColor: bgSideBar}}>
                  <span className="level-label" style={{color: colorSideBar}}>
                    Level {selectedUserLevel + 3}
                  </span>
                </div>
              </div>
            </div>
          ))
        }
        <div class="tree">
          <ul>
            <BinaryTreeNode
              allUsers={allUsers}
              user={rootUser}
              deep={1}
              maxDeep={maxDeep}
              renderDetail={renderDetail}
              renderNode={renderNode}
              onClick={onClickUser}
              colorText={colorText}
            />
          </ul>
          {disableNavigation, bgButton, colorButton && (
            <div className="navigation-buttons" style={{display: disableNavigation ? 'none' : 'flex' }}>
              <div>
                <button
                  type="button"
                  className="button-tree"
                  onClick={goToTop}
                  disabled={this.state.selectedUser === this.props.rootUser}
                  style={{backgroundColor: bgButton, color: colorButton}}
                >
                  <i>
                    <FaChevronUp />
                  </i>
                  <span>Go to top</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="button-tree"
                  onClick={upOneLevel}
                  disabled={this.state.selectedUser === this.props.rootUser}
                  style={{backgroundColor: bgButton, color: colorButton}}
                >
                  <i>
                    <FaAngleDoubleUp />
                  </i>
                  <span>Up one level</span>
                </button>
              </div>
              <div className="buttons-bottom">
                <button
                  className="button-left button-tree"
                  type="button"
                  onClick={goToBottomLeft}
                  disabled={!this.state.selectedUser.left_child_id}
                  style={{backgroundColor: bgButton, color: colorButton}}
                >
                  <i>
                    <FaArrowDown />
                  </i>
                  <span>Bottom left</span>
                </button>
                <button
                  className="button-right button-tree"
                  type="primary"
                  onClick={goToBottomRight}
                  disabled={!this.state.selectedUser.right_child_id}
                  style={{backgroundColor: bgButton, color: colorButton}}
                >
                  <i>
                    <FaArrowDown />
                  </i>
                  <span>Bottom right</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
