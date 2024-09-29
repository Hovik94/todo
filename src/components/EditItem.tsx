import { Button } from './Button';
import { ITodo } from '../utils/helpers/types';
import { useContext } from 'react';
import { ToDoContext } from '../contexts';

interface Props {
    todoItem: ITodo;
    editedText: string;
    setEditedText: (text: string) => void;
}

export const EditItem: React.FC<Props> = ({ setEditedText, editedText, todoItem }) => {
    const { update } = useContext(ToDoContext);
    const { id } = todoItem;
    const handleSaveClick = () => {
        if (editedText.trim()) {
            setEditedText('');
            update(id, editedText);
        }
    };

    const handleCancelClick = () => {
        setEditedText('');
    };

    const handleEditedText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(e.target.value);
    };
    return (
        <div>
            <input type="text" value={editedText} onChange={handleEditedText} />
            <Button
                onClick={handleSaveClick}
                alt="Ok"
                src="https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-256.png"
            />
            <Button
                onClick={handleCancelClick}
                alt="cancel"
                src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/close_red.png"
            />
        </div>
    );
};
