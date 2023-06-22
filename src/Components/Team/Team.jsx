import React from "react";
import "./Team.css";
import member1 from "../../assets/ceo.jpg";
import member2 from "../../assets/blockchn.jpg";
import member3 from "../../assets/team_lead.jpg";
import member4 from "../../assets/marketing.jpg";

function Team() {
  return (
    <div >
      <div className="container allupper" id="team">
        <h1
          className="team_title"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          Team
        </h1>
        <div className="row justify-content-center teamupper">
          <div className="col-lg-3 teamMemberUppermain ">
            <div className="teamMemberUpper">
              <div className="memberPic d-flex justify-content-center ">
                <img src={member1} alt="" className="membersty" />
              </div>
              <h4 className="memberName">Alexander</h4>
              <h6 className="memberDesignation">(CEO)</h6>
            </div>
          </div>

          <div className="col-lg-3 teamMemberUppermain mtop ">
            <div className="teamMemberUpper">
              <div className="memberPic d-flex justify-content-center">
                <img src={member2} alt="" className="membersty" />
              </div>
              <h4 className="memberName">David</h4>
              <h6 className="memberDesignation">(Blockchain Expert)</h6>
            </div>
          </div>

          <div className="col-lg-3 teamMemberUppermain mtop mtop2 ">
            <div className="teamMemberUpper">
              <div className="memberPic d-flex justify-content-center">
                <img src={member3} alt="" className="membersty" />
              </div>
              <h4 className="memberName">Michael</h4>
              <h6 className="memberDesignation">(Development Lead)</h6>
            </div>
          </div>

          <div className="col-lg-3 teamMemberUppermain mtop mtop2 ">
            <div className="teamMemberUpper">
              <div className="memberPic d-flex justify-content-center">
                <img src={member4} alt="" className="membersty" />
              </div>
              <h4 className="memberName">Daisy</h4>
              <h6 className="memberDesignation">(Marketing)</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
