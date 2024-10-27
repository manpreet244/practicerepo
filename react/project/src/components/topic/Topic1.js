import React,{useState} from 'react'
import Search from './Search';
import AddTopic from './AddTopic';
import Result from './Result';

const Topic1 = () => {
    const [topics,setTopics] = useState(['mango']);
  return (
    <div>
      <Search />
      <AddTopic setTopics={setTopics}/>
      <Result topics={topics} setTopics={setTopics}/>
    </div>
  )
}

export default Topic1
