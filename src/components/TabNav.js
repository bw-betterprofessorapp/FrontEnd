import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
	

 const panes = [
  { menuItem: {key: 'student', icon: '', content: 'Student List' },
    render: () => <Tab.Pane>Students</Tab.Pane>,
  },
  { menuItem: {key: 'messages', icon: '', content: 'Message Form' },
    render: () => <Tab.Pane>Messaging</Tab.Pane>,
  },
];

 export default function TabNav() {
  return (
    <Tab panes={panes} />
  )
};