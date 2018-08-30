import React from "react";
import Page169 from "./Page169";
import Page170 from "./Page170";
import Page171 from "./Page171";
import Page402 from "./Page402";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: Page169 },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: Page169
    },
    {
      path: "/work",
      name: "/work",
      component: Page170
    },
    {
      path: "/about",
      name: "/about",
      component: Page171
    },
    {
      path: "/contact",
      name: "/contact",
      component: Page402
    },
    {
      path: "*",
      name: "notfound",
      component: Page169
    }
  ]
};
