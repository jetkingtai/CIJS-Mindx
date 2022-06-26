// import logo from './logo.svg';
import './App.css';
import {Header} from './Component/header/Header';
import {Header_background} from './Component/header/Header-image'
import {Item} from './Component/body/item'
import {Item2} from './Component/body/item2'
import {AboutTheAuthor} from './Component/body/blog1'
import {Blog} from './Component/body/blogs'
import {Bigitem} from './Component/body/big-item'
import {Fotimg} from './Component/Fot/fot'
function App() {
  return (
    <div className='content'>
      <div className='container'>
        <Header></Header>
      </div>
      <Header_background></Header_background>
      <div className='container2 grid'>
        <div className='content-main row'>
            <div className='main-item col l-9'>
              <div className='sreach'>
                <input className='search-content' placeholder='Search'></input>
              </div>

              <div className='item-main'>
                <Item></Item>
              </div>
                <Bigitem></Bigitem>
              <div className='item-main'>
                <Item2></Item2>
              </div>
              <div className='btn-item-wap'>
                <div className='btn-item'>
                  <span>PRE</span>
                  <span>OLDER POST</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>...</span>
                  <span>8</span>
                  <span>NEXT POST</span>
                  <span>NEXT</span>
                </div>

              </div>

            </div>
            <div className='add-item col l-3'>
              <div className='about-the-author-header' >About the author</div>
              <AboutTheAuthor></AboutTheAuthor>
              <div className='about-the-author-header' >Featured posts</div>
              <Blog></Blog>
            </div>
        </div>

      </div>
      <div className='fot'>
        <div className='fot-header'>
        Follow our @instagram_name
        </div>
        <div className='fot-img-wap'>
          <Fotimg></Fotimg>
        </div>
        <div className='fot-end'>
          <h3>FASHION</h3>
        </div>
      </div>

    </div>
    
  )
}

export default App;
