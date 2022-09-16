import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MainPage from '../MainPage/MainPage';

export default function Tabs() {
  return (
    <Tabs>
    <TabList>
      <Tab>Home</Tab>
      <Tab>Friends</Tab>
    </TabList>

    <TabPanel>
      <MainPage/>
    </TabPanel>
    <TabPanel>
      Blank
    </TabPanel>
  </Tabs>
  )
}
