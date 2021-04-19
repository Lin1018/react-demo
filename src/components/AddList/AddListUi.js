import { Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Input, Button } from 'antd';

const AddListUi = (props) => {
  let { iptValue, changeInput, entryAddList, addList, list, deleteItem, html, defaultMsg, dataList } = props
  return (
    <Fragment>
      <div className="add-list">
        <div>
            <h3>这是AddList组件</h3>
            <label htmlFor="input">输入服务：</label>
            <Input 
                id="input"
                value={iptValue} 
                onChange={changeInput} 
                onKeyDown={entryAddList}
                style={{width:'300px'}}
            />
            <Button type="primary" onClick={addList}>增加服务</Button>
        </div>
        <ul>
          <TransitionGroup>
            {
                list.map((item, index) => {
                    return (
                      <CSSTransition
                        timeout={1000}
                        classNames='boss-text'
                        unmountOnExit
                        appear={true}
                        key={index+item} 
                      >
                        <li className="item" onClick={() => {deleteItem(index)}}>{item}</li>
                      </CSSTransition>
                    )
                })
            }
          </TransitionGroup>
        </ul>

        <div dangerouslySetInnerHTML={{__html: html}}></div>
        <span>{defaultMsg}</span>
            
        <ul>
          {
            dataList.map((item, index) => {
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

export default AddListUi;