import React from 'react';
import {Card,Spin,Divider,Row,Col} from 'antd';
import {Link} from 'react-router-dom';

const bookList = [{
  bookId:'1',
  bookName:'三国演义',
  author:'罗贯中'
},{
  bookId:'2',
  bookName:'水浒传',
  author:'施耐庵'
}]
export default class Demo3 extends React.PureComponent{
  state={
    bookList:[],
    bookId:'',
    loading:true
  }
  loadBookList(bookId){
    this.setState({
      loading:true
    });
    const timer = setTimeout(()=>{
      this.setState({
        loading:false,
        bookId,
        bookList
      });
      clearTimeout(timer);
    },2000);
  }
  componentDidMount(){
    const {bookId} = this.props;
    this.loadBookList(bookId);
  }
  render(){
    const {bookList,bookId,loading} = this.state;
    const selectedBook = bookList.find((book)=>book.bookId===bookId);
    return <Card>
      <Spin spinning={loading}>
        {
          selectedBook&&(<div>
            <img width="120" src={`/static/images/book_cover_${bookId}.jpeg`}/>
            <h4>书名：{selectedBook?selectedBook.bookName:'--'}</h4>
            <div>作者：{selectedBook?selectedBook.author:'--'}</div>
          </div>)
        }
        <Divider orientation="left">关联图书</Divider>
        <Row>
          {
            bookList.filter((book)=>book.bookId!==bookId).map((book)=>{
              const {bookId,bookName} = book;
              return <Col span={6}>
                <img width="120" src={`/static/images/book_cover_${bookId}.jpeg`}/>
                <h4><Link to={`/demo3/${bookId}`}>{bookName}</Link></h4>
              </Col>
            })
          }
        </Row>
      </Spin>
    </Card>
  }
}