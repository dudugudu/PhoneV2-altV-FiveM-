import "./phone.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/ducks/rootReducer";
import Routers from "./main/routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function RootPhone() {
  const dispatch = useDispatch();
  const BG_Main = useSelector(
    (state: RootState) => state.reducerStyle.phone_main
  );
  const APP = useSelector((state: RootState) => state.reducerStyle.open_app);
  const PS = useSelector(
    (state: RootState) => state.reducerStyle.click_position
  );

  //setTimeout(() => {
  //  if (APP) return;
  //}, 405);
  return (
    <>
      <div className="S20 background">
        <div
          className="Background-Main background"
          style={{ backgroundImage: "url(/static/media/walpaper.jpg)" }}
        ></div>
        <div
          className="Background-App"
          style={{
            width: APP ? "" : "0",
            height: APP ? "" : "0",
            animation: APP ? "open .4s  1" : "close 300ms  1",
            transitionDuration: ".3s",
          }}
        >
          <div
            style={{
              backgroundColor: BG_Main.topBar.BG_color,
              color: BG_Main.topBar.color,
            }}
            className="Topbar"
          ></div>
          <div
            style={{
              backgroundColor: BG_Main.topBar.BG_color,
              color: BG_Main.topBar.color,
            }}
            className="Viwer"
          ></div>
          <div
            style={{
              backgroundColor: BG_Main.topBar.BG_color,
              color: BG_Main.topBar.color,
            }}
            className="Baseboard"
          ></div>
        </div>
        <style>{`
        @keyframes open {
          0% { 
            left:${PS.x}px;
            top:${PS.y}px;
            width:10px;
            height:22px;
          }
          100% { 
            left:0px;
            top:0px;
            width:305.5px;
            height:669px;
          }
        }
        @keyframes close {
          0% { 
            left:0px;
            top:0px;
            width:305.5px;
            height:669px;
          }
          70%{
            opacity: 1
            
          }
          85%{
            width:22px;
            height:22px;
            left:${PS.x}px;
            top:${PS.y}px;
          }
          100% { 
           
            opacity: 0.2
          }
        }
      `}</style>
        <div className="Background-All-App"></div>
        <div className="Background-Viwer-Access">
          <div className="Viwer-Access-Interno">
            <Routers />
          </div>
        </div>
      </div>
    </>
  );
}

export { RootPhone };

//import { useSelector } from 'react-redux'
//import { RootState }  from './store/ducks/rootReducer'
//const Background = useSelector((state: RootState) => state.reducerStyle.bg_Main)
//console.log(Background);
