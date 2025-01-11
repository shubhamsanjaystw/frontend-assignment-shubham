import React from 'react';

const RenderTableHeader = ({ columnsTitles }) => {
    return (
        <thead>
            <tr>
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
                <tr key={rowIndex}>
                     {columnsToBeShown.map((column, colIndex) => (
                        <td key={colIndex}>{entry[column]}</td>
                    ))}
                </tr>)
            )}
        </tbody>
    );
};

const RenderTableComponent = ({ columnsTitles,columnsToBeShown,tableEntries }) => {
    return (
        <div>
            <h1>Kick Starter Projects</h1>
            <table border="1">
                <RenderTableHeader columnsTitles={columnsTitles} />
                <RenderTableEntries entries={tableEntries} columnsToBeShown={columnsToBeShown} />
            </table>
        </div>
    );
};

export default RenderTableComponent;
