import React, { useState } from "react";
import "./Cadastro.css";

function Cadastro() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Cadastro enviado com sucesso!");
    console.log(form);
  }

  return (
    <div className="container-cadastro">
      <h2>Cadastro de Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mensagem" className="form-label">Mensagem</label>
          <textarea
            className="form-control"
            id="mensagem"
            name="mensagem"
            rows="4"
            value={form.mensagem}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Cadastro;
