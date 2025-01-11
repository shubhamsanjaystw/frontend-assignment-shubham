import React from 'react';

import useKickStarterProjectContainer from './dataContainer/useKickStarterProjectContainer'
import RenderTableComponent from './components/TableComponent'

const App = () => {
  const {projects} = useKickStarterProjectContainer();
  const kickstarterProjectTableColumns = ['S.No.','Percentage funded','Amount pledged']
  const columnsToBeShown = ['s.no','percentage.funded', 'amt.pledged'];
 return (
    <div>
      <RenderTableComponent columnsTitles ={ kickstarterProjectTableColumns } columnsToBeShown= {columnsToBeShown} tableEntries={ projects } />
    </div>
)
};
export default App;