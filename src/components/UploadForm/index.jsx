import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  IoCloudUploadOutline,
  IoAddCircleOutline,
  IoCloseOutline,
} from 'react-icons/io5';

import {
  Form,
  UploadColumn,
  InputWrapper,
  Title,
  IngredientsWrapper,
  ButtonAdd,
  TextArea,
  IngredientsList,
  RemoveButton,
} from './styles';
import { AppInput } from '../AppInput';
import { AppTextarea } from '../AppTextarea';
import { isNaN } from 'mathjs';

export default function UploadForm({ handleGetData }) {
  // get user information from redux
  const { username } = useSelector(state => state.user.user);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const [recipeTitle, setRecipeTitle] = useState();
  const [recipePrepTime, setRecipePrepTime] = useState();
  const [recipeServings, setRecipeServings] = useState();

  const [ingredientName, setIngredientName] = useState();
  const [ingredientUnit, setIngredientUnit] = useState();
  const [ingredientAmount, setIngredientAmount] = useState();
  const [stepText, setStepText] = useState();
  const [recipeImage, setRecipeImage] = useState();

  const [instructionId, setInstructionId] = useState(0);
  const [ingredientId, setIngredientId] = useState(0);

  function handleRecipeImage(e) {
    if (e.target.files.length === 0) return;

    setRecipeImage(e.target.files[0]);

    console.log(recipeImage);
  }

  function handleAddIngredients() {
    if (!ingredientName || !ingredientUnit || ingredientAmount < 1) return;

    const newState = [...ingredients];
    newState.push({
      id: ingredientId + 1,
      name: ingredientName,
      unit: ingredientUnit,
      amount: ingredientAmount,
    });

    setIngredients(newState);

    setIngredientId(ingredientId + 1);
  }

  function handleRemoveIngredient(id) {
    const newState = [...ingredients];

    newState.map((ingredient, index) =>
      ingredient.id === id ? newState.splice(index, 1) : newState
    );

    return setIngredients(newState);
  }

  function handleAddInstructions() {
    if (!stepText) return;

    const newState = [...instructions];
    newState.push({
      id: instructionId + 1,
      step: stepText,
    });

    setInstructions(newState);
    setInstructionId(instructionId + 1);
  }

  function handleRemoveInstruction(id) {
    const newState = [...instructions];

    newState.map((instruction, index) =>
      instruction.id === id ? newState.splice(index, 1) : newState
    );

    return setInstructions(newState);
  }

  function handleStepTextChange(e) {
    if (!e.target.value) return;

    return setStepText(e.target.value);
  }

  // handle form
  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData();
    form.append('title', recipeTitle);
    form.append('servings', recipeServings);
    form.append('ready_in_minutes', recipePrepTime);
    form.append('ingredients', JSON.stringify(ingredients));
    form.append('instructions', JSON.stringify(instructions));
    form.append('recipe-photo', recipeImage);
    form.append('author_id', '30e5d38b-f683-4cce-b0f8-79fc242e8cf9');

    const res = await fetch('http://localhost:7070/recipe', {
      method: 'POST',
      body: form,
    });

    // return handleGetData();
  }

  return (
    <Form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      method="POST"
      autoComplete="off"
    >
      <UploadColumn>
        <Title>Dados da receita</Title>

        <AppInput
          label="Título"
          inputType="text"
          inputName="title"
          inputId="title"
          placeholder="Título da receita"
          handleChange={e => setRecipeTitle(e.target.value)}
          isRequired={true}
        />

        <IngredientsWrapper>
          <AppInput
            label="Tempo de preparo"
            inputType="number"
            inputName="cookingTime"
            inputId="cookingTime"
            placeholder="Minutos"
            handleChange={e => setRecipePrepTime(e.target.value)}
            isRequired={true}
          />
          <AppInput
            label="Porções"
            inputType="number"
            inputName="servings"
            inputId="servings"
            placeholder="Quantidade"
            handleChange={e => setRecipeServings(e.target.value)}
            isRequired={true}
          />
        </IngredientsWrapper>
      </UploadColumn>

      <UploadColumn>
        <IngredientsWrapper>
          <Title>Ingredientes</Title>

          <ButtonAdd
            type="button"
            onClick={() => handleAddIngredients()}
            style={{ marginLeft: 'auto' }}
          >
            <IoAddCircleOutline size={26} />
          </ButtonAdd>
        </IngredientsWrapper>

        <IngredientsWrapper>
          <AppInput
            label="Nome"
            inputType="text"
            inputName="ingredient-name"
            inputId="ingredient-name"
            placeholder="Fermento?"
            handleChange={e => setIngredientName(e.target.value)}
            isRequired={true}
          />
          <AppInput
            label="Unidade"
            inputType="string"
            inputName="ingredient-unit"
            inputId="ingredient-unit"
            placeholder="Gramas?"
            handleChange={e => setIngredientUnit(e.target.value)}
            isRequired={true}
          />
          <AppInput
            label="Quantidade"
            inputType="number"
            inputName="ingredient-quantity"
            inputId="ingredient-quantity"
            placeholder="2?"
            handleChange={e => setIngredientAmount(e.target.value)}
            isRequired={true}
          />
        </IngredientsWrapper>

        <IngredientsList>
          {ingredients.length > 0 &&
            ingredients.map(ingredient => {
              return (
                <li key={ingredient.id}>
                  <span>{ingredient.name}</span>
                  <span>
                    {ingredient.amount} {ingredient.unit}
                  </span>
                  <RemoveButton
                    type="button"
                    onClick={() => handleRemoveIngredient(ingredient.id)}
                  >
                    <IoCloseOutline size={26} />
                  </RemoveButton>
                </li>
              );
            })}
        </IngredientsList>
      </UploadColumn>

      <UploadColumn>
        <IngredientsWrapper>
          <Title>Instruções</Title>

          <ButtonAdd
            type="button"
            onClick={() => handleAddInstructions()}
            style={{ marginLeft: 'auto' }}
          >
            <IoAddCircleOutline size={26} />
          </ButtonAdd>
        </IngredientsWrapper>

        <AppTextarea
          label="Passo a passo"
          labelId="instructions"
          handleChange={e => handleStepTextChange(e)}
        />

        <IngredientsList>
          {instructions.length > 0 &&
            instructions.map((instruction, index) => {
              return (
                <li key={instruction.id}>
                  <span
                    style={{ minWidth: 'fit-content', marginRight: '1rem' }}
                  >
                    Passo: {index + 1}
                  </span>

                  <span>{instruction.step}</span>

                  <RemoveButton
                    type="button"
                    onClick={() => handleRemoveInstruction(instruction.id)}
                  >
                    <IoCloseOutline size={26} />
                  </RemoveButton>
                </li>
              );
            })}
        </IngredientsList>
      </UploadColumn>

      <AppInput
        label="Escolha a foto da sua receita"
        inputType="file"
        inputName="recipe-photo"
        inputId="recipe-photo"
        isRequired={true}
        handleChange={e => handleRecipeImage(e)}
        isPhotoSelected={recipeImage ? true : false}
      />

      <button type="submit" className="submit">
        <span>Upload </span>
        <IoCloudUploadOutline size={26} />
      </button>
    </Form>
  );
}
