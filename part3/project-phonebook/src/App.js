import { useState } from 'react'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if(checkDuplicate(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
  
      setPersons(persons.concat(nameObject))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const checkDuplicate = (name) => {
    return (persons.find(person => person.name === name)
      ? true
      : false
    )
  }

  const handleFilterNames = (event) => {
      const filtered_persons = persons.filter(person =>
        person.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
        
      setPersons(filtered_persons)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter handleFilter={handleFilterNames}/>

      <h2>Add new</h2>

      <PersonForm name={newName} number={newNumber} 
        handleAddPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
      
      <Persons persons={persons}/>

    </div>
  )
}

export default App