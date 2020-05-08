import React from 'react';
import { Rate } from 'antd';

const RateStars = (props) => {
  console.log(props.number)
  return (
    <div>
      <Rate disabled count={5} defaultValue={props.number}/>
    </div>
  )
}

export default RateStars;



