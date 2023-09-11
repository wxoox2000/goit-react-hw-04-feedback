import { List, Option } from './FeedbackOptions.styled';

export const FeedbackOptions = ({feedback}) => {
    return (
      <List>
        <li>
          <Option id='good' onClick={feedback}>Good</Option>
        </li>
        <li>
          <Option id='neutral' onClick={feedback}>Neutral</Option>
        </li>
        <li>
          <Option id='bad' onClick={feedback}>Bad</Option>
        </li>
      </List>
    );
}
