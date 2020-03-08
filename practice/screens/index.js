import React from 'react'
import Screen from './Screen'
import SubScreen from './SubScreen'

export const HomeScreen = ({navigation}) => <Screen navigation={navigation} name="Home" />
export const DescribeScreen = ({navigation}) => <Screen navigation={navigation} name="Describe" />
export const SubmitScreen = ({navigation}) => <SubScreen navigation={navigation} name="Submit" />
export const DashboardScreen = ({navigation}) => <Screen navigation={navigation} name="Dashboard" />
