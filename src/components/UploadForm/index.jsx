import React from 'react';
import { useSelector } from 'react-redux';

import { IoCloudUploadOutline } from 'react-icons/io5';

import { Form, UploadColumn, InputWrapper, Title } from './styles';

export default function UploadForm({ handleGetData }) {
  // get user information from redux
  const { username } = useSelector(state => state.user.user);

  // handle form
  function handleSubmit(e) {
    e.preventDefault();

    const dataArr = [...new FormData(e.target)];
    dataArr.push(['publisher', username ? username : '']);

    const dataObj = Object.fromEntries(dataArr);
    console.log(dataObj);

    return handleGetData(dataObj);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <UploadColumn>
        <Title>Recipe data</Title>

        <InputWrapper>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Recipe's title"
            minLength={2}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="sourceUrl">Url</label>
          <input
            type="text"
            name="sourceUrl"
            id="sourceUrl"
            placeholder="Recipe's source url"
            minLength={5}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="image">Image Url</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Recipe's image url"
            minLength={5}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="cookingTime">Prep time</label>
          <input
            type="number"
            name="cookingTime"
            id="cookingTime"
            placeholder="Recipe's preparation time (min)"
            min={1}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="servings">Servings</label>
          <input
            type="number"
            name="servings"
            id="servings"
            placeholder="Recipe's servings"
            min={1}
            required
          />
        </InputWrapper>
      </UploadColumn>

      <UploadColumn>
        <Title>Ingredients</Title>

        <InputWrapper>
          <label htmlFor="ingredient-1">Ingredient 1</label>
          <input
            type="text"
            name="ingredient-1"
            id="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="ingredient-2">Ingredient 2</label>
          <input
            type="text"
            name="ingredient-2"
            id="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="ingredient-3">Ingredient 3</label>
          <input
            type="text"
            name="ingredient-3"
            id="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="ingredient-4">Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            id="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="ingredient-5">Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            id="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="ingredient-6">Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            id="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </InputWrapper>
      </UploadColumn>

      <button type="submit">
        <span>Upload </span>
        <IoCloudUploadOutline size={26} />
      </button>
    </Form>
  );
}
