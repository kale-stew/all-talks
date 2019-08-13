export const TodoBeforeNative = `
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Welcome to React</h1>
        </header>
        <p className="body">Here's a bunch of text.</p>
      </div>
    );
  }
}`;

export const TodoAfterNative = `
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text>Welcome to React</Text>
        </View>
        <ScrollView>
          <Text>Here's a bunch of text.</Text>
        </ScrollView>
      </View>
    )
  }
}`;

export const AppCSS = `
// App.css

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  padding: 20px;
}

.header {
  background-color: green;
  color: white;
  height: 30px;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.title {
  font-size: 22px;
  align-self: center;
}

.body {
  display: flex;
  justify-content: center;
  border: 2px solid silver;
  padding: 30px;
}`;

export const AppJSSnippet = `
// snippet from App.js

return (
  <div className="app">
    <header className="header">
      <h1 className="title">Welcome to React</h1>
    </header>
    <p className="body">
      Here's a bunch of text.
    </p>
  </div>
);`;

export const Native = `
const App = () => {
  const { headerStyle, titleStyle, bodyStyle, textStyle } = styles;
  return (
    <View>
      <ScrollView>
        <View style={headerStyle}>
            <Text style={titleStyle}>Welcome to React</Text>
        </View> 
        <View style={bodyStyle}>
            <Text style={textStyle}>Here's the rest of my content</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = {
  headerStyle: {
    flex: 1,
    backgroundColor: 'green'
  },

  titleStyle: {
    padding: 30,
    fontSize: 24,
    alignSelf: 'center',
    color: 'white'
  },

  bodyStyle: {
    alignSelf: 'center',
    backgroundColor: 'silver'
  },

  textStyle: {
    color: 'black',
    fontSize: 18,
    padding: 17
  }
}
`;

export const StackNavigator = `
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen }
});

class App extends React.Component {
  render() {
      return <SimpleApp />;
  }
};

export default App;
`;

export const TabNavigator = `
const SimpleApp = TabNavigator({
  Home: { screen: HomeScreen },
  Notifications: { screen: NotificationsScreen }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'green',
  },
});

export default SimpleApp;
`;

export const EnvBefore = `
require('dotenv').config();

var db = require('db');
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});
`;

export const EnvAfter = `
import Config from 'react-native-config';

var db = require('db');
db.connect({
  host: Config.DB_HOST,
  username: Config.DB_USER,
  password: Config.DB_PASS
});
`;
