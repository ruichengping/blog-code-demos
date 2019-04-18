import React from 'react';
import BookDetail from './bookDetail';
export default class Demo3 extends React.PureComponent{
  render(){
    const {match} = this.props;
    const {params} = match;
    const {bookId} = params;
    return <BookDetail key={bookId} bookId={bookId}/>
  }
}