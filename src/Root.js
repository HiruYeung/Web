import { Outlet } from "react-router";
import Header from "./components/Header";
import ScrollableImageContainer from "./components/ScrollableImageContainer";


const Root = () => {
  return (
    <div>
      <div style={{  display:"flex", justifyContent:"center" }}>
        <ScrollableImageContainer/>
      </div>
      <div>
        <Header/>
      </div>
      <div style={{  height:"100px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
