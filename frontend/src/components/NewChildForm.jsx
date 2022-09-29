import { useState } from "react";

export default function NewChildForm({
  formData,
  toggleAddChildren,
  children,
  setChildren,
}) {
  const [form, setForm] = useState(formData);

  function handleSubmit(e) {
    e.preventDefault();

    let hobbyCollectionNode = document.getElementsByName("hobbyCheckbox");

    let hobbyCollection = [];

    for (const hobbyCollect of hobbyCollectionNode) {
      if (hobbyCollect.checked) {
        hobbyCollection = [...hobbyCollection, hobbyCollect.value];
      }
    }
    setForm({ ...form, hobby: hobbyCollection });
    addChildrenToDataBase({ ...form, hobby: hobbyCollection });
    toggleAddChildren();
  }

  function cancel() {
    setForm({});
    toggleAddChildren();
  }

  const addChildrenToDataBase = (newChildren) => {
    const newChildId = children.length;
    const updatedNewChildren = {
      id: newChildId,
      ...newChildren,
      mentor: "TBC",
    };
    setChildren([...children, updatedNewChildren]);
  };

  function handleChange(e) {
    const targetEvent = e.target;
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
          <input type="checkbox" value="drawing" name="hobbyCheckbox" />
        </label>
        <label htmlFor="">
          <span>football</span>
          <input type="checkbox" value="football" name="hobbyCheckbox" />
        </label>
        <label htmlFor="">
          <span>football</span>
          <input type="checkbox" value="music" name="hobbyCheckbox" />
        </label>
        <label htmlFor="">
          <span>camping</span>
          <input type="checkbox" value="camping" name="hobbyCheckbox" />
        </label>

        <button type="submit">Confirm</button>
        <button type="button" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}
