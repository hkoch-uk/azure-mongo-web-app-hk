import { useEffect, useState } from "react";

//fetch data about childrens
// patch the data to the backend
const mockChilrenData = [
  { name: "linlin", hobby: ["football", "drawing"], age: 5, mentor: "kim" },
  { name: "Ryan", hobby: ["football", "drawing"], age: 6, mentor: "kim" },
  { name: "Luqman", hobby: ["football", "drawing"], age: 7, mentor: "kim" },
];
export default function SchoolPage() {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    setChildren(mockChilrenData);
  }, []);

  const fetchChildrenData = () => {
    fetch(``)
      .then((childrenFromDatabase) => childrenFromDatabase.json())
      .then((childrenFromDatabase) => setChildren(childrenFromDatabase));
  };

  return (
    <div className="school-page">
      <section>
        <button>View Chilren</button>
        <section className="child-view-section">
          {children.length ? (
            <>
              {children.map((child) => {
                console.log("child", child);
                return (
                  <div className="child-card">
                    <p>Name:{child.name}</p>
                    <p>
                      hobby:
                      {child.hobby.map((hobby) => (
                        <span className="hobby-tag">{hobby}</span>
                      ))}
                    </p>
                    <p>age:{child.age}</p>
                    <p>mentor:{child.mentor}</p>
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
