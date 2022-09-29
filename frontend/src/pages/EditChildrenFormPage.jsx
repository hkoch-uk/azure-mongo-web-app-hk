import { useState,useEffect } from "react";

const mockMentorData = [
    {
      name: "Kim",
      hobby: ["football", "drawing"],
      email: "kim@gmail.com",
      id: 11,
    },
    {
      name: "Linlin",
      hobby: ["drawing", "music"],
      email: "linlin@gmail.com",
      id: 22,
    },
    {
      name: "Ryan",
      hobby: ["football", "camping"],
      email: "ryan@gmail.com",
      id: 33,
    },
  ];


export default function EditChildrenFormPage({
}) {
    const [mentorList, setMentorList] = useState([]);
    useEffect(() => {
        setMentorList(mockMentorData);
      }, []);
  return
  <>
              {mentorList.map((mentor, index) => {
                return (
                  <div className="child-card" key={index}>
                    <p>Name:{mentor.name}</p>
                    <p>Email:{mentor.email}</p>
                    <p>
                      hobby:
                      {mentor.hobby.map((hobby, index) => (
                        <span className="hobby-tag" key={index}>
                          {hobby}
                        </span>
                      ))}
                    </p>
                    <button
                      >
                        confirm
                    </button>
                  </div>
                );
              })}
            </>
}