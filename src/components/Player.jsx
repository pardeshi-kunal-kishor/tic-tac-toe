import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let button = <button onClick={handleEditClick}>Edit</button>;

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    button = <button onClick={handleEditClick}>Save</button>;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {button}
    </li>
  );
}

export default Player;
