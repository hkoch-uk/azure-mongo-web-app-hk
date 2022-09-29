import { useEffect, useState } from "react";
import NewChildForm from "../components/NewChildForm";
import {Routes, Route, useNavigate} from 'react-router-dom';

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
    hobby: ["football", "music"],
    email: "linlin@gmail.com",
    age: 6,
    mentor: "kim",
    id: 2,
  },
  {
    name: "Luqman",
    hobby: ["football", "camping"],
    email: "linlin@gmail.com",
    age: 7,
    mentor: "kim",
    id: 3,
  },
];
export default function SchoolPage() {
  const navigate = useNavigate()
  const [children, setChildren] = useState([]);
  const [addChild, setAddChild] = useState(false);
  const [viewChildren, setViewChildren] = useState(false);
  const [form, setForm] = useState({});
  const [read, setRead] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setChildren(mockChilrenData);
  }, []);

  const fetchChildrenData = () => {
    fetch(``)
      .then((childrenFromDatabase) => childrenFromDatabase.json())
      .then((childrenFromDatabase) => setChildren(childrenFromDatabase));
  };

  const toggleAddChildren = () => {
    setAddChild(!addChild);
  };

  const toggleViewChildren = () => {
    setViewChildren(!viewChildren);
  };

  const toggleEdit =() =>{
    console.log("!")
    setEdit(!edit);
    if(edit){
      navigate("/editchildren")
    }
  }

  const toggleSendLetter = () => {
    setRead(!read);
  };

  const deleteChildren = (id) => {
    const updatedChildrenDatabase = children.filter((child) => child.id !== id);
    //idealy should send updatedate children to database then setchildren
    setChildren(updatedChildrenDatabase);
  };

  return (
    <div className="school-page">
      <section>
        <button onClick={toggleViewChildren}>View Children</button>
        <button onClick={toggleAddChildren}>add more child</button>
        <section>
          {addChild ? (
            <NewChildForm
              formData={form}
              toggleAddChildren={toggleAddChildren}
              children={children}
              setChildren={setChildren}
            />
          ) : null}
        </section>

        <section className="child-view-section">
          {viewChildren ? (
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
                    <button onClick={toggleEdit}>edit</button>
                    <button onClick={toggleSendLetter}>
                      {!read ? "Send letter" : "cancel"}
                    </button>
                    {read ? (
                      <>
                        <a href="mailto: abc@example.com">Send Email</a>
                      </>
                    ) : null}
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
