import { useState } from "react";

// {
//     name: "linlin",
//     hobby: ["football", "drawing"],
//     age: 5,
//     mentor: "kim",
//     id: 1,
//   }

export default function NewChildForm({ formData, toggleAddChildren }) {
  const [form, setForm] = useState(formData);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function cancel() {
    setForm({});
    toggleAddChildren();
  }

  function handleChange(e) {
    const targetEvent = e.target;
    console.log("targetEvent", targetEvent.name);
    setForm({ ...form, [targetEvent.name]: targetEvent.value });
  }

  return (
    <div>
      <form className="child-register-form" onSubmit={handleSubmit}>
        <label htmlFor="">
          <span> childname</span>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <span>age</span>
          <input
            type="number"
            value={form.age}
            name="age"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <span>hobby</span>
          <input
            type="text"
            value={form.hobby}
            name="hobby"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Confirm</button>
        <button type="button" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}
