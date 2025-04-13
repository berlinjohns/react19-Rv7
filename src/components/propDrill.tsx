import React from 'react';

interface PropDrillProps {
  state: string; // Define 'state' as a string
}

function PropDrill({ state }: PropDrillProps) {
  return (
    <div>
      PropDrill the state is <strong>{state}</strong>
    </div>
  );
}

export default PropDrill;