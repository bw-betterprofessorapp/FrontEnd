import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function TabNav() {	

 const panes = [
  { menuItem: {key: 'students', icon: '', content: 'Students List' },
    render: () => <Tab.Pane>Students</Tab.Pane>,
  },
  { menuItem: {key: 'messages', icon: '', content: 'Messaging' },
    render: () => <Tab.Pane>Characters Content</Tab.Pane>,
  },

];

 export default function TabNav() {
  return (
    <Tab panes={panes} />
  )
};	};