import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [ noteText, setNoteText ] = useState('');
    const characterLimit = 200;

    const handleNoteText = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleSaveButton = () => {
        if (noteText.trim().length) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className='note new'>
            <textarea
                cols='10'
                rows='8'
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleNoteText}
            >
            </textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} remaining</small>
                <button
                    className='save'
                    onClick={handleSaveButton}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddNote;
