import React from 'react';

import useKickStarterProjectContainer from './dataContainer/useKickStarterProjectContainer'
import RenderTableComponent from './components/TableComponent'

const App = () => {
  const {projects} = useKickStarterProjectContainer();
  const kickstarterProjectTableColumns = ['S.No.','Percentage funded','Amount pledged']


  return (
    <div>
      <RenderTableComponent columns ={ kickstarterProjectTableColumns } tableEntries={ projects } />
    </div>
)
};
export default App;