import PropTypes from 'prop-types';

export const FeedbackButton = ({ options, addFeedback }) => {
    return (
      
            <ul>
                {Object.keys(options).map(key => {
                    return (
                        <li key={key}>
                            <button type="button" id={key} onClick={addFeedback}>
                                {options[key]}
                            </button>
                        </li>
                    );
                })}
            </ul>
    );
}

FeedbackButton.propTypes = {
    options: PropTypes.object.isRequired,
    addFeedback: PropTypes.func.isRequired,
};