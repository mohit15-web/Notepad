import React from 'react'

function Head() {
    const buttons = [
        {
            id: 1,
            label: 'Write',
            onClick: () => alert('Button 1 clicked'),
            border:true
        },
        {
            id: 2,
            label: 'Preview',
            onClick: () => alert('Button 2 clicked'),
            border:true
        },
        {
            id: 3,
            label: 'H',
            onClick: () => alert('Button 3 clicked'),
        },
        {
            id: 4,
            label: 'B',
            onClick: () => alert('Button 3 clicked'),
        },
        {
            id: 5,
            label: 'I',
            onClick: () => alert('Button 3 clicked'),
        },
        {
            id: 6,
            label: 'H',
            onClick: () => alert('Button 3 clicked'),
        },
        {
            id: 7,
            label: 'H',
            onClick: () => alert('Button 3 clicked'),
        },
        {
            id: 3,
            label: 'H',
            onClick: () => alert('Button 3 clicked'),
        },
    ];

    return (
        <div className="flex bg-[#F8F9F8] py-6 px-3">
            {buttons.map(button => (
                <button key={button.id} onClick={button.onClick}
                className={button.border ? 'border p-2 mx-2' : 'mx-2 font-bold'}
                >{button.label}</button>
            ))}
        </div>
    );
}

export default Head