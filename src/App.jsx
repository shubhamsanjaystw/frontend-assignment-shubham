import React from 'react';
import useKickStarterProjectContainer from './dataContainer/useKickStarterProjectContainer'
import RenderTableComponent from './components/TableComponent'
import './App.css'

const App = () => {
  const {projects} = useKickStarterProjectContainer();
  const kickstarterProjectTableColumns = ['S.No.','Percentage funded','Amount pledged']
  const columnsToBeShown = ['s.no','percentage.funded', 'amt.pledged'];
 return (
    <div id='page' className='card'>
      
      <h1 id='tableHeading'>Kick Starter Projects</h1>
      <div  className='card'>
      <RenderTableComponent columnsTitles ={ kickstarterProjectTableColumns } columnsToBeShown= {columnsToBeShown} tableEntries={ projects } />
      </div>
    </div>
)
};
export default App;