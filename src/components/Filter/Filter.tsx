import React, {useState} from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";

interface FilterElement {
    id: number;
    label: string;
}

interface FilterComponentProps {
    filterElements: FilterElement[];
    onFilterChange: (selectedFilters: string[]) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({filterElements, onFilterChange}) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);


    const handleCheckboxChange = (filter: string) => {
        const updatedFilters = selectedFilters.includes(filter)
            ? selectedFilters.filter(item => item !== filter)
            : [...selectedFilters, filter];

        setSelectedFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div>
            <button onClick={toggleDropdown}>
                Filters
                {isOpen && ` (${selectedFilters.length} selected)`}
            </button>
            {isOpen && (
                <div>
                    {filterElements.map((element) => (
                        <div key={element.id}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={selectedFilters.includes(element.label)}
                                        onChange={() => handleCheckboxChange(element.label)}
                                        name={element.label}
                                    />
                                }
                                label={element.label}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterComponent;
