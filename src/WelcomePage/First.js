import React from "react";
import "./wel.css";
import pic from "../img/1.png";
import { Button } from "antd";
import { useHistory } from "react-router";
import { RightOutlined } from "@ant-design/icons";

function First() {
  const hist = useHistory();
  return (
    <div className="backdrop">
      <div className="backdrop_content">
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="backdrop_img">
            <img
              src={pic}
              style={{ height: "100", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              width: "80%",
              // background: "red",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            welcome tofirgjanescugjb kzbhjbfkvhusjdksdoliztyvljvwm
            io4k6ls;le,oprcjyjwuesyjfkerjdu tjykh;wk ',4o5jyhenfupi;tjdm
            [jiwhyeudrskpidrj9q3tugidiwo4 kyoijhutfudioepskoroiowtuwiok
            ietjojgwghyeujtugikwoep[olgyoi5e
          </div>
          <div className="my_button">
            <RightOutlined
              onClick={() => {
                hist.push("/2");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
