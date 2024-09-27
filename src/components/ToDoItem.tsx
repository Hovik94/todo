import { useContext, useState } from 'react';
import { ITodo } from '../utils/helpers/types';
import { ToDoContext } from '../contexts';
import { Button } from './Button';
import { EditItem } from './EditItem';

interface Props {
    todoItem: ITodo;
}
export const ToDoItem: React.FC<Props> = ({ todoItem }) => {
    const { remove, complete, update } = useContext(ToDoContext);
    const [editedText, setEditedText] = useState<string>('');
    const { id, completed, todo, deadline } = todoItem;

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
        <div className="item">
            <div>
                <input type="checkbox" checked={completed} onChange={() => complete(id)} />
                {editedText ? (
                    <EditItem
                        onSaveClick={handleSaveClick}
                        onCancelClick={handleCancelClick}
                        onEditedText={handleEditedText}
                        editedText={editedText}
                        todoItem={todoItem}
                    />
                ) : (
                    <div>
                        <p className={completed ? 'complete' : ''}>{todo}</p>
                        <p>{deadline}</p>
                    </div>
                )}
            </div>
            <div>
                <Button
                    onClick={() => remove(id)}
                    alt="Delete"
                    src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Trash-Can--256.png"
                />
                <Button
                    onClick={() => setEditedText(todo)}
                    alt="Edit"
                    src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/pencil-edit-write-draw-stationary-512.png"
                />
            </div>
        </div>
    );
};
