import { Component, PropsWithChildren } from "react";
import { Provider } from "mobx-react";

import "./theme.scss";

class App extends Component<PropsWithChildren> {
  render() {
    return <Provider>{this.props.children}</Provider>;
  }
}

export default App;
