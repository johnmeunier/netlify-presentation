import React from 'react';
import { Notes } from 'spectacle';

const images = {
  john: require('../../assets/john.jpg'),
  jl: require('../../assets/jl.jpg'),
};

const John = () => <h1> <img className="presenter__profile" src={images.john}/> John </h1>
const JL = () => <h1> <img className="presenter__profile" src={images.jl}/> JL </h1>

const Profile = ({ presenter, notes }) => (
    <Notes>
        {presenter === "john" && <John />}
        {presenter === "jl" && <JL />}
        <ul>
            {
                notes.map(note => <li>{note}</li>)
            }
        </ul>
    </Notes>
);

export default Profile;
