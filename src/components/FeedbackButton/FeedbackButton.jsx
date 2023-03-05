import PropTypes from 'prop-types';

export const FeedbackButton = ({ options }) => {
    return (
        <>
            <ul>
                {Object.keys(options).map(key => {
                    return (
                        <li key={key}>
                            <button type="button" id={key}>
                                {options[key]}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

FeedbackButton.propTypes = {
    options: PropTypes.object.isRequired,
    
};