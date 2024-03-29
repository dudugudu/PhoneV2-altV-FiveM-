import { AnimetedApp } from "component/tools/tools";
import * as Comp from "component/tools/tools";
import "./instagram.css";
function Instagram(params: string) {
  return (
    <>
      <AnimetedApp>
        <div className="external-instagram">
          <div className="topbar">
            <img src="./static/icons/instagram-logo.png" alt="" />
            <div className="icons-right">
              <img
                style={{ margin: "0 6px 0 0" }}
                className="icons"
                src="./static/icons/iconsApp/tools.svg"
                alt=""
              />
              <img
                style={{ margin: "0 6px 0 6px" }}
                className="icons"
                src="./static/icons/iconsApp/like.svg"
                alt=""
              />
              <img
                style={{ margin: "0 0 0 6px" }}
                className="icons"
                src="./static/icons/iconsApp/message.svg"
                alt=""
              />
            </div>
          </div>
          <div className="status">
            <div className="box-status">
              <div className="box-external-profile">
                <div
                  className="status-profile "
                  style={{
                    backgroundImage:
                      'url("https://i.pinimg.com/originals/66/bf/c5/66bfc551758def865f1367a41bb13ed5.jpg")',
                  }}
                ></div>
                <div className="add-status">
                  <Comp.Icon outlined fontSize="11px" color="#fff">
                    add
                  </Comp.Icon>
                </div>
              </div>
              <p>Seu story</p>
            </div>
            <div className="box-status">
              <div className="box-external-profile ">
                <div
                  className="status-profile status-activated"
                  style={{
                    backgroundImage:
                      'url("https://i.pinimg.com/originals/66/bf/c5/66bfc551758def865f1367a41bb13ed5.jpg")',
                  }}
                ></div>
              </div>
              <p>Seu story</p>
            </div>
          </div>
          <div className="viwe-post">
            <div className="external-posts">
              <div className="topbar-post">
                <div className="image-profile-post">
                  <div
                    className="logo"
                    style={{
                      backgroundImage:
                        "url(./static/icons/galinhaprogamadora.png)",
                    }}
                  ></div>
                </div>
                <div className="name-post">
                  <h5>Galinha progamadora</h5>
                </div>
              </div>
              <div className="viwer-post">
                <img src="./static/icons/post.jpg" alt="" />
              </div>
              <div className="baseboard-post">
                <div className="base-actions">
                  <img
                    style={{ margin: "0 6px 0 0" }}
                    className="icons"
                    src="./static/icons/iconsApp/like.svg"
                    alt=""
                  />
                  <img
                    style={{ margin: "0 6px 0 6px" }}
                    className="icons"
                    src="./static/icons/iconsApp/chat.svg"
                    alt=""
                  />
                  <img
                    style={{ margin: "0 0 0 6px" }}
                    className="icons"
                    src="./static/icons/iconsApp/send.svg"
                    alt=""
                  />
                </div>
                <div className="base-actions">
                  <img
                    style={{ margin: "0 0 0 6px" }}
                    className="icons"
                    src="./static/icons/iconsApp/bookmarker.svg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h5>90 curtidas</h5>
                <h5>Galinha </h5>
              </div>
            </div>
          </div>
          <div className="base-board"></div>
        </div>
      </AnimetedApp>
    </>
  );
}
export default Instagram;
