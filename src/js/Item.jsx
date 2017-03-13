import React from "react";

export default class Item extends React.Component {
  render() {
    const { active, image, found, onClick } = this.props;
    return <div className="col">
      <div className="cardholder">
        <div className={active||found?"card flipped":"card"} onClick={onClick}>
          <div className="front"></div>
          <div className="back">
            <img  src={require("../img/"+image)} />
          </div>
        </div>
      </div>
    </div>
  }
}

Item.propTypes = {
  active: React.PropTypes.bool.isRequired,
  image: React.PropTypes.string.isRequired,
  found: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func
}
