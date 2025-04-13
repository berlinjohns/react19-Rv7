import React from 'react';
import { Link, useParams,Outlet, NavLink } from 'react-router';

const profiles = [1, 2, 3, 4, 5];

function ProfilesPage() {
  const params=useParams();
  console.log(params)
  return (
    <div>
      {profiles.map((profile) => {
        return (
          <NavLink className={(isActive)=>{ return isActive ? 'text-primary-700':''}}  key={profile} to={`/profiles/${profile}`}>
            Profile {profile}
          </NavLink>
        );
      })}

      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default ProfilesPage;