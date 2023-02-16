import Directory from './components/directory/directory.component'
import { categories } from './utils/Categories'

const App = () => {
  return (
    <Directory categories={categories} />
  )
}

export default App
