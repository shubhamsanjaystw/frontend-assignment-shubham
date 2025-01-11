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
        <tbody>
            {entries.map((entry, rowIndex) => (
                <tr  key={rowIndex}>
                     {columnsToBeShown.map((column, colIndex) => (
                        <td id='tableContent'key={colIndex}>{entry[column]}</td>
                    ))}
                </tr>)
            )}
        </tbody>
    );
};

const Pagination = ({pageSize, setPageSize, currentPage, setCurrentPage, totalPage })=> {
    
      return (
        <div className='pagination'>
                <span>
                    <button onClick={()=>setCurrentPage((currentPage)=> currentPage-1) }>Last</button><input onChange={(e)=>setCurrentPage(e.target.value)}/><button onClick={()=>setCurrentPage((currentPage)=> currentPage+1) }>next</button>
                </span>
    </div>
      )
    
}
const RenderTableComponent = ({ columnsTitles,columnsToBeShown,tableEntries }) => {
    const [pageSize, setPageSize] = useState(5)
    const [currentPage,setCurrentPage] = useState(0);
  
    const totalPage = tableEntries.length;
  
    const startIndex = currentPage*pageSize;
    const endIndex = startIndex + pageSize
  
    const tableEntriesForPage = tableEntries.slice(startIndex,endIndex)

    return (
        <div id='tableWrp'>
            <table >
                <RenderTableHeader columnsTitles={columnsTitles} />
                <RenderTableEntries entries={tableEntriesForPage} columnsToBeShown={columnsToBeShown} />
            </table>
            <Pagination pageSize= {pageSize}  setPageSize = {setPageSize} currentPage= {currentPage} setCurrentPage= {setCurrentPage} totalPage= {totalPage}  />
        </div>

    );
};

export default RenderTableComponent;
