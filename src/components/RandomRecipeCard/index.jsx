import React from 'react';

import { IoArrowForwardOutline, IoReloadOutline } from 'react-icons/io5';
import { Card } from './styles';

export default function RandomRecipeCard() {
  return (
    <Card>
      <button>Get random recipe</button>
      {/* <button>
        <IoArrowForwardOutline size={26} />
      </button> */}
    </Card>
  );
}
