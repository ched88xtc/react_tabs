import React from 'react';

import './App.scss';
import { Tabs } from './Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    defaultTab: tabs[0],
  };

  selectedTab = (tabId) => {
    const findTab = tabs.find(tab => tab.id === tabId);

    this.setState({
      defaultTab: findTab,
    });
  };

  render() {
    const { defaultTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {defaultTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          defaultTab={this.state.defaultTab}
          onSelectedTab={this.selectedTab}
        />
      </div>
    );
  }
}

export default App;
