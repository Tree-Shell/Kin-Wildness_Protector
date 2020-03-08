import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import { HomeScreen, DescribeScreen, SubmitScreen, DashboardScreen } from './screens';

import SideBar from './components/SideBar';

const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      drawerIcon: ({tintColor}) => <Icon name="home" size={16} color={tintColor} />
    }
  },
  DescribeScreen: {
    screen: DescribeScreen,
    navigationOptions: {
      title: "How It Work?",
      drawerIcon: ({tintColor}) => <Icon name="questioncircleo" size={16} color={tintColor} />
    }
  }, 
  SubmitScreen: {
    screen: SubmitScreen,
    navigationOptions: {
      title: "Take & Submit Pictures",
      drawerIcon: ({tintColor}) => <Icon name="file1" size={16} color={tintColor} />
    }
  }, 
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: {
      title: "Dashboard",
      drawerIcon: ({tintColor}) => <Icon name="linechart" size={16} color={tintColor} />
    }
  }
},
{
  contentComponent: props => <SideBar {...props} />,

  // Modify the width of the sidebar
  drawerWidth: Dimensions.get("window").width * 0.85,
  hideStatusBar: true,
    contentOptions: {
      // Background color of the active sidebar
      activeBackgroundColor: "rgba(50, 150, 80, 0.2)",
      // Color of the active font
      activeTintColor: "rgba(67, 107, 77, 1)",
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8
      },
      itemStyle: {
        borderRadius: 4
      }

    }
});

export default createAppContainer(DrawerNavigator);