import { List, StatItem } from './Statistics.styled';
import { Notification } from 'components/notification/Notification';

export const Statistics = ({data, percentage, total}) => {
    const isData = data.every((stats) => stats===0);
    return (
      <>
      {isData ? (<Notification message="There is no feedback"/>) : (
        <List>
        <StatItem>
          <p>good: {data[0]}</p>
        </StatItem>
        <StatItem>
          <p>neutral: {data[1]}</p>
        </StatItem>
        <StatItem>
          <p>bad: {data[2]}</p>
        </StatItem>
        <StatItem>
          <p>total: {total}</p>
        </StatItem>
        <StatItem $percentage ={percentage}>
          <p>positivePercentage: {percentage}%</p>
        </StatItem>
      </List>
      )}
      </>
    );
}
