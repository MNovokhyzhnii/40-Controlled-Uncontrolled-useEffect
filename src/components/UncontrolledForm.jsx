import { useRef } from "react";

export default function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const agreeRef = useRef(null);
  const roleRef = useRef(null);
  const fileRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      role: roleRef.current.value,
      agree: agreeRef.current.checked,
      fileName: fileRef.current.files[0]?.name ?? null,
    };
    alert(
      "Зчитав дані через refs (Uncontrolled):\n" +
        JSON.stringify(payload, null, 2)
    );
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <label>
        Ім'я
        <input ref={nameRef} defaultValue="Микола" />
      </label>

      <label>
        Email
        <input ref={emailRef} defaultValue="" />
      </label>

      <label>
        Роль
        <select ref={roleRef} defaultValue="user">
          <option value="user">Користувач</option>
          <option value="admin">Адмін</option>
        </select>
      </label>

      <label className="checkbox">
        <input type="checkbox" ref={agreeRef} defaultChecked />
        Погоджуюсь з умовами
      </label>

      <label>
        Файл (необов'язково)
        <input type="file" ref={fileRef} />
      </label>

      <button type="submit">Надіслати</button>
    </form>
  );
}
