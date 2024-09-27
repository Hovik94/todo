import { Button } from "./Button";
import { ITodo } from "../utils/helpers/types";

interface Props {
    todoItem: ITodo;
    onSaveClick: () => void
    onCancelClick:() => void
    onEditedText:(e: React.ChangeEvent<HTMLInputElement>) => void
    editedText: string

}

export const EditItem:React.FC<Props> = ({onSaveClick, onCancelClick, onEditedText, editedText}) => {

    return (
        <div>
            <input type="text" value={editedText} onChange={onEditedText} />
            <Button
                onClick={onSaveClick}
                alt="Ok"
                src="https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-256.png"
            />
            <Button
                onClick={onCancelClick}
                alt="cancel"
                src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/close_red.png"
            />
        </div>
    );
};
