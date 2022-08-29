import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    });
  });
  return (
    <div>
      <h1>Contacts</h1>
      <br />
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contacts, i) => (
          <li key={i}>
            <span>{contacts.fullname}</span>
            <span>{contacts.phoneNumber}</span>
            </li>
        ))}
      </ul>
      <p>Total Contacts ({filtered.length}) </p>
    </div>
  );
}

export default List;
