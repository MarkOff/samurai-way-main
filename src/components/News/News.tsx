import React from 'react';
import s from './News.module.css';

type NewsType = {
    news: string
}

const News = (props:NewsType) => {
    return (
      <div>
          {props.news}
      </div>
    );
}

export default News;
