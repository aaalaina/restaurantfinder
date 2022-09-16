import MainPage from "./MainPage/MainPage";
import Results from "./Results/Results";

import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Friends from "./Friends/Friends";


function App() {
  return (
    <>
    {/* <Routes>
      <Route path='/search' element = {<Results/>}/>
      <Route path='/' element = {<MainPage/>}/>
    </Routes> */}
    <Tabs>
    <TabList>
      <Tab>Home</Tab>
      <Tab>Search</Tab>
      <Tab>Friends</Tab>
    </TabList>

    <TabPanel>
      <MainPage/>
    </TabPanel>
    <TabPanel>
      <Results/>
    </TabPanel>
    <TabPanel>
      <Friends/>
    </TabPanel>
  </Tabs>
  </>
  );
}

export default App;
