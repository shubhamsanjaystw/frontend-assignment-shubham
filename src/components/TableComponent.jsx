import React from 'react';

const RenderTableHeader = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column}</th> 
                ))}
            </tr>
        </thead>
    );
};

const RenderTableEntries = ({ entries }) => {
    console.log('RenderTableEntries:', entries);
    return (
        <tbody>
            {entries.map((entry, rowIndex) => (
                <tr key={rowIndex}>
                    {Object.values(entry).map((value, colIndex) => (
                        <td key={colIndex}>{value}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

const RenderTableComponent = ({ columns, tableEntries }) => {
    console.log('RenderTableComponent - columns:', columns);
    console.log('RenderTableComponent - tableEntries:', tableEntries);

    return (
        <div>
            <h1>Kick Starter Projects</h1>
            <table border="1">
                <RenderTableHeader columns={columns} />
                <RenderTableEntries entries={tableEntries} />
            </table>
        </div>
    );
};

export default RenderTableComponent;
