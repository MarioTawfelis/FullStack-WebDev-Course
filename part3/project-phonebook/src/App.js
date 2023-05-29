import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if(checkDuplicate(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName
      }
  
      setPersons(persons.concat(nameObject))
    }

    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const checkDuplicate = (name) => {
    return (persons.find(person => person.name === name)
      ? true
      : false
    )
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
          {persons.map(person =>
            <p key={person.name}>{person.name}</p>  
          )}

      </div>
    </div>
  )
}

export default App