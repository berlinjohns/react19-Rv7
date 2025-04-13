import React from 'react';
import { Link, useParams } from 'react-router';

const profiles = [1, 2, 3, 4, 5];

function ProfilePage() {
  const params=useParams<{profileId:string}>();
  console.log(params)
  return (
    <div>
     <h1>Profile : {params.profileId}</h1>
    </div>
  );
}

export default ProfilePage;
