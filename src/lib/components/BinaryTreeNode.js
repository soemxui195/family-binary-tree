import React from "react";

// const fakeUser = {
//   id: "null",
//   username: "Null",
//   left_child_id: null,
//   right_child_id: null,
//   image: "https://i.imgur.com/AFj9jns.png"
// };
export default class BinaryTreeNode extends React.Component {
  render() {
    const {
      user,
      allUsers,
      // fakeUser = [],
      deep,
      maxDeep = 4,
      renderDetail,
      renderNode,
      onClick,
      colorText = "#333",
      imageFake = "https://i.imgur.com/AFj9jns.png",
      nameFake = "Null"
    } = this.props;
    const fakeUser = {
      id: "null",
      username: nameFake,
      left_child_id: null,
      right_child_id: null,
      image: imageFake
    };
    let leftChild = allUsers.find(item => item.id === user.left_child_id);
    if (!leftChild) {
      leftChild = fakeUser;
    }
    let rightChild = allUsers.find(item => item.id === user.right_child_id);
    if (!rightChild) {
      rightChild = fakeUser;
    }
    return (
      <li>
        {colorText && (
          <a
            onClick={() => {
              onClick && onClick(user.id);
            }}
            href="javascript:void(0)"
          >
            {renderNode ? (
              renderNode(user)
            ) : (
              <div className="distributor-wrap">
                <div className="avatar">
                  <img src={user.image} />
                </div>
                <span className="name" style={{ color: colorText }}>
                  {user.username}
                </span>
              </div>
            )}
            <div className="distributor-details">
              {renderDetail ? (
                renderDetail(user)
              ) : (
                <div className="details-wrap">
                  <div className="details-title">Details In RenderDetail</div>
                  <div className="details-row">
                    <div className="label">NAME</div>
                    <div className="value">{user.username}</div>
                  </div>
                </div>
              )}
              <div className="horizontal-line" />{" "}
              <div className="sloping-line" />
            </div>
          </a>
        )}

        {deep < maxDeep && (
          <ul>
            <BinaryTreeNode
              deep={deep + 1}
              maxDeep={maxDeep}
              allUsers={allUsers}
              user={leftChild}
              renderDetail={renderDetail}
              renderNode={renderNode}
              onClick={onClick}
              colorText={colorText}
              imageFake={imageFake}
              nameFake={nameFake}
            />
            <BinaryTreeNode
              deep={deep + 1}
              maxDeep={maxDeep}
              allUsers={allUsers}
              renderDetail={renderDetail}
              renderNode={renderNode}
              user={rightChild}
              onClick={onClick}
              colorText={colorText}
              imageFake={imageFake}
              nameFake={nameFake}
            />
          </ul>
        )}
      </li>
    );
  }
}
