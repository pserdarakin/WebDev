import React from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {

  const contacts = [
    {
      id: "1",
      "name": "Serdie",
      "email": "serdie@gmail.com"
    },
    {
      id: "2",
      "name": "pepe",
      "email": "pepe@gmail.com"
    },

  ];
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App