import { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import 'antd/dist/antd.css'
import { Input, Button } from 'antd';

class AddListUi extends Component {
    render() { 
        return (
          <Fragment>
            <div className="add-list">
              <div>
                  <h3>这是AddList组件</h3>
                  <label htmlFor="input">输入服务：</label>
                  <Input 
                      id="input"
                      value={this.props.iptValue} 
                      onChange={this.props.changeInput} 
                      onKeyDown={this.props.entryAddList}
                      ref={(input) => {this.myInput = input}}
                      style={{width:'300px'}}
                  />
                  <Button type="primary" onClick={this.props.addList}>增加服务</Button>
              </div>
              <ul ref={(ul) => {this.ul = ul}}>
                <TransitionGroup>
                  {
                      this.props.list.map((item, index) => {
                          return (
                            <CSSTransition
                              timeout={1000}
                              classNames='boss-text'
                              unmountOnExit
                              appear={true}
                              key={index+item} 
                            >
                              <li className="item" onClick={() => {this.props.deleteItem(index)}}>{item}</li>
                            </CSSTransition>
                          )
                      })
                  }
                </TransitionGroup>
              </ul>
    
              <div dangerouslySetInnerHTML={{__html: this.props.html}}></div>
              <span>{this.props.defaultMsg}</span>
                  
              <ul>
                {
                  this.props.dataList.map((item, index) => {
                    return (
                      <li key={index}>{item.title}</li>
                    )
                  })
                }
              </ul>
            </div>
          </Fragment>
        )
    }
}

export default AddListUi;