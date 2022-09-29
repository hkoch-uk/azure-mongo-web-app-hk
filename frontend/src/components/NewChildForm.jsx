import { useState } from "react";

// {
//     name: "linlin",
//     hobby: ["football", "drawing"],
//     age: 5,
//     mentor: "kim",
//     id: 1,
//   }

export default function NewChildForm({
  formData,
  toggleAddChildren,
  children,
  setChildren,
}) {
  const [form, setForm] = useState(formData);

  function handleSubmit(e) {
    e.preventDefault();
    addChildrenToDataBase(form);
  }

  function cancel() {
    setForm({});
    toggleAddChildren();
  }

  const addChildrenToDataBase = (newChildren) => {
    const newChildId = children.length;
    const updatedNewChildren = { id: newChildId, ...newChildren };
    setChildren([...children, updatedNewChildren]);
  };

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
            type="text"
            value={form.age}
            name="age"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="" className="hobby-label">
          <span>hobby</span>
        </label>
        <label htmlFor="">
          <span>drawing</span>
          <input
            type="checkbox"
            value="drawing"
            name=""
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <span>football</span>
          <input
            type="checkbox"
            value="football"
            name=""
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <span>camping</span>
          <input
            type="checkbox"
            value="camping"
            name=""
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
