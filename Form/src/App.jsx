import { useState } from 'react'
import {useForm} from "./useForm";
import "./App.css"

function App () {
  const {form, handleChange, reset} = useForm();

  const isValid = 
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.message.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    if(!form.name || !form.email || !form.message) {
      alert("Tous les champs sont requis");
      return;
    }

    console.log(form);

    reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Formulaire de contact</h1>
      <input
        type="text"
        name="name"
        placeholder="Nom"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        value={form.message}
        placeholder="Message"
        onChange={handleChange} 
      />
      <button type="submit" disabled={!isValid}>Envoyer</button>
    </form>
  )
}

export default App;