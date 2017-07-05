import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'react-virtualized';

const list = [
    'Riki Sholiardi'
];

function rowRenderer({
    key,
    index,
    isScrolling,
    isVisible,
    style
}) {
    return (
        <div
            key={key}
            style={style}
        >
        {list[index]}
        </div>
    )
}

ReactDOM.render(
    <List
        width={300}
        height={300}
        rowCount={list.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
      />,
    document.getElementById('root')
);
