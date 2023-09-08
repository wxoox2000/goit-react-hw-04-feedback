import { List, Option } from './FeedbackOptions.styled';

export const FeedbackOptions = ({feedback}) => {
    return (
      <List>
        <li>
          <Option id='good' onClick={feedback.incrementGood}>Good</Option>
        </li>
        <li>
          <Option id='neutral' onClick={feedback.incrementNeutral}>Neutral</Option>
        </li>
        <li>
          <Option id='bad' onClick={feedback.incrementBad}>Bad</Option>
        </li>
      </List>
    );
}
