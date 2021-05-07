import React from 'react';

import { IoCloudUploadOutline } from 'react-icons/io5';
import styles from '../styles/components/UploadForm.module.scss';

export default function UploadForm() {
  return (
    <form className={styles.upload}>
      <div className={styles.uploadColumn}>
        <h3>Recipe data</h3>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Recipe's title"
          required
        />

        <label htmlFor="sourceUrl">Url</label>
        <input
          type="text"
          name="sourceUrl"
          id="sourceUrl"
          placeholder="Recipe's source url"
          required
        />

        <label htmlFor="image">Image Url</label>
        <input
          type="text"
          name="image"
          id="image"
          placeholder="Recipe's image url"
          required
        />

        <label htmlFor="publisher">Publisher</label>
        <input
          type="text"
          name="publisher"
          id="publisher"
          placeholder="Recipe's publisher name"
          required
        />

        <label htmlFor="cookingTime">Prep time</label>
        <input
          type="number"
          name="cookingTime"
          id="cookingTime"
          placeholder="Recipe's cooking time"
          required
        />

        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          name="servings"
          id="servings"
          placeholder="Recipe's servings?"
          required
        />
      </div>

      <div className={styles.uploadColumn}>
        <h3>Ingredients</h3>

        <label htmlFor="ingredient-1">Ingredient 1</label>
        <input
          type="text"
          name="ingredient-1"
          id="ingredient-1"
          placeholder="Format: 'Quantity,Unit,Description'"
          required
        />

        <label htmlFor="ingredient-2">Ingredient 2</label>
        <input
          type="text"
          name="ingredient-2"
          id="ingredient-2"
          placeholder="Format: 'Quantity,Unit,Description'"
        />

        <label htmlFor="ingredient-3">Ingredient 3</label>
        <input
          type="text"
          name="ingredient-3"
          id="ingredient-3"
          placeholder="Format: 'Quantity,Unit,Description'"
        />

        <label htmlFor="ingredient-4">Ingredient 4</label>
        <input
          type="text"
          name="ingredient-4"
          id="ingredient-4"
          placeholder="Format: 'Quantity,Unit,Description'"
        />

        <label htmlFor="ingredient-5">Ingredient 5</label>
        <input
          type="text"
          name="ingredient-5"
          id="ingredient-5"
          placeholder="Format: 'Quantity,Unit,Description'"
        />

        <label htmlFor="ingredient-6">Ingredient 6</label>
        <input
          type="text"
          name="ingredient-6"
          id="ingredient-6"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
      </div>

      <button>
        <span>Upload</span>
        <IoCloudUploadOutline size={26} />
      </button>
    </form>
  );
}
