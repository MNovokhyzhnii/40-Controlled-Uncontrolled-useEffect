import { useState } from "react";

export default function ControlledForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    agree: false,
    role: "user",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validate() {
    const errs = {};
    if (form.name.trim().length < 2) errs.name = "Мінімум 2 символи";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Невірний email";
    if (!form.agree) errs.agree = "Потрібна згода";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Надсилаю дані (Controlled):\n" + JSON.stringify(form, null, 2));
      setForm({ name: "", email: "", agree: false, role: "user" });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <label>
        Ім'я
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Лера"
        />
        {errors.name && <small className="error">{errors.name}</small>}
      </label>

      <label>
        Email
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="lera@example.com"
        />
        {errors.email && <small className="error">{errors.email}</small>}
      </label>

      <label>
        Роль
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">Користувач</option>
          <option value="admin">Адмін</option>
        </select>
      </label>

      <label className="checkbox">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
        />
        Погоджуюсь з умовами
      </label>
      {errors.agree && <small className="error">{errors.agree}</small>}

      <button type="submit">Надіслати</button>
    </form>
  );
}
