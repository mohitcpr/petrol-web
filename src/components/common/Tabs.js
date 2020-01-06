import "../../styles/tabs.css";
import React from "react";
import PropTypes from "prop-types";

const Tabs = props => {
  const { items, active, onClick, className } = props;

  const renderActiveComponent = () => {
    for (let item of items) {
      if (item.id === active) {
        return item.component;
      }
    }
    return null;
  };
  return (
    <div className={"tabContainer " + className}>
      <ul className="tab">
        {items.map(item => (
          <li
            className={"tab__box" + (active === item.id ? " tab--active" : "")}
            onClick={() => onClick(item.id)}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="tab-component">{renderActiveComponent()}</div>
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.string
};

Tabs.defaultProps = {
  items: []
};

export default Tabs;
