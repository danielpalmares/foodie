import React from 'react';

import { Card } from './styles';

export default function RandomRecipeCard({ handleRandom }) {
  return (
    <Card>
      <button onClick={handleRandom}>Get random recipe</button>
    </Card>
  );
}
