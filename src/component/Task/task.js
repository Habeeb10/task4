import React from "react";
import "./task.css";
import Frame from "../../Frame.png";
import Hero from "../../hero.svg";
import First from "../../first.svg";
import Party from "../../Party.svg";
import Second from "../../second.svg";
import Stero from "../../stero.svg";
import Vendor from "../../vendor.svg";
import Pilot from "../../pilot.svg";
import Track from "../../track.png";
import Sales from "../../sales.png";
const Task = () => {
  return (
    <div className="container">
      <div className="new">
        <h1 className="zom">Zomentum</h1>
        <div className="head">
          <h6> Features</h6>
          <h6> Integrations</h6>
          <h6> Pricing</h6>
          <h6> Company</h6>
          <h6> Blog</h6>
          <button className="but"> Get a demo</button>
          <h6> Login</h6>
        </div>
      </div>
      <div className="sec">
        <h3 className="find">
          Find the right partners to <br /> fuel your business growth
        </h3>
        <h6 className="join">
          Join a vibrant community of MSPs to forge long-lasting relationships
          with partners. <br /> that help you create excellent customer
          experiences
        </h6>
        <button className="butt"> Register Today</button>
        <img className="img" src={Frame} alt="Frame.png" />
        <img className="hero" src={Hero} alt="hero.svg" />
      </div>
      <div className="third">
        <img className="second" src={Second} alt="second.svg" />
        <div className="h3">
          <h3 className="h3">List. Sell. Grow</h3>
        </div>
        <div className="party">
          <img className="party" src={Party} alt="Party.svg" />
        </div>
        <div className="image">
          <img className="first" src={First} alt="first.svg" />
        </div>
      </div>
      <div className="fourth">
        <div className="tex">
          <h4 className="prog">
            Your channel program <br /> on steroids
          </h4>
          <h5 className="can">
            Tired of finding MSPs that can help you boost your <br /> channel
            sales? You’re in luck, because they’re all here.
          </h5>
        </div>
        <img className="stero" src={Stero} alt="stero.svg" />
      </div>
      <div className="fifth">
        <img className="vendor" src={Vendor} alt="vendor.svg" />
        <div className="buy">
          <h4 className="ven">
            Become the vendor <br /> everyone wants to buy from
          </h4>
          <h5 className="brand">
            Gain brand authority and visibility with the help of the <br />
            largest IT service ecosystem. Find customers who are <br /> looking
            for your solution right now!
          </h5>
          <h4 className="signnn">Signup now</h4>
        </div>
      </div>
      <div className="sixth">
        <div className="auto">
          <h4 className="best">
            It’s like having Your best <br /> Salesman on autopilot
          </h4>
          <h5 className="rich">
            Share collaterals and documents that are <br /> automatically
            branded. Leverage a rich partner <br />
            network that sells your solution exactly the way <br /> your best
            salesman would.
          </h5>
          <h4 className="signn">Signup now</h4>
        </div>
        <img className="pilot" src={Pilot} alt="pilot.svg" />
      </div>
      <div className="seventh">
        <img className="track" src={Track} alt="track.png" />
        <div className="buy">
          <h4 className="mance">
            Track your channel <br /> performance
          </h4>
          <h5 className="more">
            Monitor the health and revenue of your channel <br /> program and
            streamline your campaign to win more <br /> customers within
            Zomentum.
          </h5>
          <h4 className="sign">Signup now</h4>
        </div>
      </div>
      <div className="eight">
        <div className="version">
          <h4 className="book">
            Get The best version of <br />
            Your sales playbook
          </h4>
          <h5 className="happy">
            Gather insights about top channel sellers and find <br /> out what
            pitch and collaterals ensure maximum <br /> profitability. Win happy
            customers with an <br /> optimized sales playbook.
          </h5>
          <h4 className="sig">Signup now</h4>
        </div>
        <img className="sales" src={Sales} alt="sales.png" />
      </div>
      <div className="last">
        <div className="names">
          <h6 className="names">
            Product <br />
            Features <br />
            Pricing <br />
            Integrations <br />
            Product
          </h6>
        </div>
        <div className="hap">
          <h6 className="hap">
            Company <br />
            Conatact us <br />
            About us <br />
            Submit a ticket <br />
            Private policy <br />
            Terms & condtions
          </h6>
        </div>
        <div className="user">
          <h6 className="user">
            Users <br />
            Login <br />
            Get a demo <br />
            Talk to us <br />
            private policy <br />
            Terms & condtions
          </h6>
        </div>
        <div className="guides">
          <h6 className="guides">
            Guides <br />
            Msp <br />
            Msp sales
          </h6>
        </div>
        <div className="add">
          <h6 className="add">
            Contact us <br />
            Address
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Task;
