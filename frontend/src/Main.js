import { Routes, Route } from "react-router-dom"
import App from "./App"
import NewMember from "./NewMember"
import EditMember from "./EditMember"

function Main() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="newMember" element={ <NewMember/> } />
        <Route path="editMember" element={ <EditMember/> } />
      </Routes>
    </div>
  )
}

export default Main