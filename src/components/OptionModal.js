var React = require('react');
var Modal = require('react-modal');


const OptionModal = (props) => {
    return(
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelected}
            contentLabel="Selected Option"
        >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelected}>Okay</button>
        </Modal>
    );
};

export default OptionModal;