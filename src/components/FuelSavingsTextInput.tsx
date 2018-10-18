import * as React from 'react';

interface FuelSavingsTextInputProps {
    name: string;
    onChange: (e: React.FormEvent) => void;
    placeholder?: string;
    value: number | string;
}

const FuelSavingsTextInput: React.SFC<FuelSavingsTextInputProps> = ({
    name,
    value,
    placeholder,
    onChange
}) => {
    return (
        <input
            className="small"
            name={name}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default FuelSavingsTextInput;
