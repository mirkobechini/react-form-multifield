import { useState } from 'react'

//import components
import AppShowList from './components/AppShowList.jsx'
import AppForm from './components/AppForm.jsx'

//import Data
import articles from './data/articoli.js'

function App() {

  const [liveArticles, setLiveArticles] = useState(articles)

  function addLiveArticle(newArticle) {
    const newId = liveArticles[liveArticles.length - 1].id + 1
    setLiveArticles([...liveArticles, { id: newId, title: newArticle, content: "" }])
  }

  function delLiveArticle(id) {
    const newArticles = liveArticles.filter(liveArticle => liveArticle.id != id)
    setLiveArticles(newArticles)
  }

  return (
    <>

      <AppShowList items={liveArticles} delItem={delLiveArticle} />
      <AppForm setItems={addLiveArticle} />
    </>
  )
}

export default App
