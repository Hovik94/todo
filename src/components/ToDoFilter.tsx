import { useContext } from 'react';
import { ContextForFilter } from '../utils/helpers/contexts';
import { FILTER_OPTIONS } from '../utils/helpers/constants';

export const ToDoFilter: React.FC = () => {
    const { filter, setFilter } = useContext(ContextForFilter);

    const handleChange = (e: { target: { value: string } }) => {
        setFilter(+e.target.value);
    };

    return (
        <>
            <select value={filter} onChange={handleChange}>
                {FILTER_OPTIONS.map(({ value, label }) => {
                    return (
                        <option value={value} key={value}>
                            {label}
                        </option>
                    );
                })}
            </select>
        </>
    );
};
