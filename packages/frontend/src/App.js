import React from 'react'
import { hot } from 'react-hot-loader'
import './index.css'
import { Button, Icon } from '@blueprintjs/core'
import TreeExample from './FileTree'

@hot(module)
export default class App extends React.Component {
  constructor(props) {
    super(props)
    let initUsername = 'dev'
    if (process.env.NODE_ENV === 'production') {
      initUsername = prompt('请输入你的用户名')
    }
    this.state = {
      itemList: [],
      author: initUsername,
    }
  }

  onToolClick = toolsId => {
    if (toolsId === 1) {
      // const w=window.open('about:blank');
      window.location.href='http://119.3.193.23:8566/'
    } else if (toolsId === 2) {
      // const w=window.open('about:blank');
      window.location.href='http://10.214.224.118:8081/'
    } else {
      // const w=window.open('about:blank');
      window.location.href='http://10.214.224.236:7070/static/index.html'
    }
  }

  render() {
    // TODO avoid in-replace modification
    return (
      <div>

        <div className='mainLayout' style={{display: 'flex'}}>

          <div className="TreeLayout">
            <Button>上传</Button>
            <Button>下载</Button>
            <TreeExample />
          </div>

          <div className="toolsButtonGroup">
            <Button onClick={() => this.onToolClick(1)}>
              实体标注
            </Button>

            <Button onClick={() => this.onToolClick(2)}>
              关系标注/情感分析标注
            </Button>

            <Button onClick={() => this.onToolClick(3)}>
              属性标注
            </Button>
          </div>
        </div>


      </div>
    )
  }
}
