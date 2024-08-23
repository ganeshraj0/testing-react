import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
const Contant = ({item,handeling,deletefun}) => {
  
  return (
    <main>
      {item.length ? (
        <ul>
          {item.map((i) => (
            <li className="item" key={i.id}>
              <input
                className="inputbox"
                type="checkbox"
                onChange={() => handeling(i.id)}
                checked={i.checked}
              />
              <label
                style={i.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handeling(i.id)}
              >
                {i.items}
              </label>
              <FaTrashAlt
                onClick={() => deletefun(i.id)}
                role="button"
                tabIndex="0"
            />
             
            </li>
          ))}
        </ul>
      ) : (
        "Your List Is emty"
      )}
    </main>
  );
};

export default Contant;
