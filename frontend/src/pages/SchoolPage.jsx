import { useEffect, useState } from "react";
import NewChildForm from "../components/NewChildForm";

//fetch data about childrens
// patch the data to the backend
const mockChilrenData = [
  {
    name: "linlin",
    hobby: ["football", "drawing"],
    email: "linlin@gmail.com",
    age: 5,
    mentor: "kim",
    id: 1,
  },
  {
    name: "Ryan",
    hobby: ["football", "drawing"],
    email: "linlin@gmail.com",
    age: 6,
    mentor: "kim",
    id: 2,
  },
  {
    name: "Luqman",
    hobby: ["football", "drawing"],
    email: "linlin@gmail.com",
    age: 7,
    mentor: "kim",
    id: 3,
  },
];
export default function SchoolPage() {
  const [children, setChildren] = useState([]);
  const [addChild, setAddChild] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    setChildren(mockChilrenData);
  }, []);
  const addChildrenToDataBase = () => {};
  const fetchChildrenData = () => {
    fetch(``)
      .then((childrenFromDatabase) => childrenFromDatabase.json())
      .then((childrenFromDatabase) => setChildren(childrenFromDatabase));
  };

  const toggleAddChildren = () => {
    setAddChild(!addChild);
  };

  const deleteChildren = (id) => {
    const updatedChildrenDatabase = children.filter((child) => child.id !== id);
    //idealy should send updatedate children to database then setchildren
    setChildren(updatedChildrenDatabase);
  };

  return (
    <div className="school-page">
      <section>
        <button>View Chilren</button>
        <button onClick={toggleAddChildren}>add more child</button>
        <section>
          {addChild ? (
            <NewChildForm
              formData={form}
              toggleAddChildren={toggleAddChildren}
            />
          ) : null}
        </section>

        <section className="child-view-section">
          {children.length ? (
            <>
              {children.map((child, index) => {
                return (
                  <div className="child-card" key={index}>
                    <p>Name:{child.name}</p>
                    <p>Email:{child.email}</p>
                    <p>
                      hobby:
                      {child.hobby.map((hobby, index) => (
                        <span className="hobby-tag" key={index}>
                          {hobby}
                        </span>
                      ))}
                    </p>
                    <p>age:{child.age}</p>
                    <p>mentor:{child.mentor}</p>
                    <button
                      onClick={() => {
                        deleteChildren(child.id);
                      }}
                    >
                      delete
                    </button>
                    <button>edit</button>
                  </div>
                );
              })}
            </>
          ) : null}
        </section>
      </section>
    </div>
  );
}
