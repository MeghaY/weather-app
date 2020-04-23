import React from 'react';

const Dropdown = ({options, onChange}) => {
    return (
        <div className="w_dropdown">
            <select className="w_options" onChange={onChange}>
                {options.map(item => (
                    <option key={item._id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;