import React from 'react';

const Message = (props) => {
    const { text } = props;
    return (
        <div className="absolute top-[200px] bg-white shadow-md p-3 border-2 border-emerald-500 rounded-lg">
            <p className="text-emerald-500">{text}</p>
        </div>
    );
};

export default Message;
