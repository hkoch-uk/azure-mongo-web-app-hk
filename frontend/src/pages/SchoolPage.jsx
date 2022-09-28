import { useEffect, useState } from "react";

//fetch data about childrens
// patch the data to the backend

export default function SchoolPage() {
  const [children, setChildren] = useState({});

  useEffect(() => {}, []);

  return (
    <div className="school-page">
      <section>
        <button>View Chilren</button>
      </section>
    </div>
  );
}
