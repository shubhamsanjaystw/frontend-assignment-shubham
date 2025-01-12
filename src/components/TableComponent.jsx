import React, {useState} from 'react';
import './styles.css'

const RenderTableHeader = ({ columnsTitles }) => {
    return (
        <thead>
            <tr id='tableHeader'>
                {columnsTitles.map((column, index) => (
                    <th key={index}>{column}</th> 
                ))}
            </tr>
        </thead>
    );
};

const RenderTableEntries = ({ entries, columnsToBeShown }) => {
    
    return (
        entries.length >0 ? (<tbody>
            {entries.map((entry, rowIndex) => (
                <tr id='contentRow'  key={rowIndex}>
                     {columnsToBeShown.map((column, colIndex) => (
                        <td id='tableContent'key={colIndex}>{entry[column]}</td>
                    ))}
                </tr>)
            )}
        </tbody>) : <tr>
            <td id='noDataText' colSpan={columnsToBeShown.length} style={{ textAlign: 'center' }}>
                No Data Available
            </td>
        </tr>
    )
};

const Pagination = ({pageSize, setPageSize, currentPage, setCurrentPage, totalPage })=> {
 
      return (
        <div className='pagination'>
                <span>
                    <button className={currentPage <= 0 ? 'buttonInactive': ''}   onClick={()=> setCurrentPage((currentPage)=> currentPage <= 0 ? currentPage: currentPage-1)  }>
                         {'<'}
                    </button>
                    <input type="number" max={totalPage} value={currentPage}  onkeydown="return event.key !== 'ArrowUp' && event.key !== 'ArrowDown';" onChange={(e)=>setCurrentPage(e.target.value)}/>
                    <button className={currentPage >= totalPage ? 'buttonInactive': ''}  onClick={()=>setCurrentPage((currentPage)=> currentPage >= totalPage ? currentPage : currentPage+1 ) }>
                        {'>'}
                    </button>
                </span>
    </div>
      )
    
}
const RenderTableComponent = ({ columnsTitles,columnsToBeShown,tableEntries }) => {
    const [pageSize, setPageSize] = useState(5)
    const [currentPage,setCurrentPage] = useState(0);
  
    const totalPage = Math.floor(tableEntries.length/pageSize);
  
    const startIndex = currentPage*pageSize;
    const endIndex = startIndex + pageSize
  
    const tableEntriesForPage = tableEntries.slice(startIndex,endIndex)

    return (
        <div id='tableWrp'>
            <table >
                <RenderTableHeader columnsTitles={columnsTitles} />
                <RenderTableEntries entries={tableEntriesForPage} columnsToBeShown={columnsToBeShown} />
            </table>
            <Pagination currentPage= {currentPage} setCurrentPage= {setCurrentPage} totalPage= {totalPage}  />
        </div>

    );
};

export default RenderTableComponent;
