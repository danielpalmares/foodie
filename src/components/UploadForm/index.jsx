import React, { useState } from 'react';

import { IoCloudUploadOutline, IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

import { Form, UploadColumn, InputWrapper, Title, PhotoPreview, AddRemoveBtn } from './styles';

export default function UploadForm({ handleGetData }) {
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [ingredients, setIngredients] = useState([
    { name: '', unit: '', amount: '' },
    { name: '', unit: '', amount: '' },
  ]);
  const [instructions, setInstructions] = useState([{ step: '' }, { step: '' }]);

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  function handleIngredientChange(index, field, value) {
    setIngredients(ingredients.map((ing, i) =>
      i === index ? { ...ing, [field]: value } : ing
    ));
  }

  function handleInstructionChange(index, value) {
    setInstructions(instructions.map((ins, i) =>
      i === index ? { step: value } : ins
    ));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const filteredIngredients = ingredients
      .filter(ing => ing.name.trim())
      .map(ing => ({
        name: ing.name.trim(),
        unit: ing.unit.trim(),
        amount: parseFloat(ing.amount) || 0,
      }));

    const filteredInstructions = instructions
      .filter(ins => ins.step.trim())
      .map((ins, i) => ({ step_number: i + 1, step: ins.step.trim() }));

    return handleGetData({
      title: formData.get('title'),
      servings: parseInt(formData.get('servings'), 10),
      ready_in_minutes: parseInt(formData.get('ready_in_minutes'), 10),
      photo,
      ingredients: filteredIngredients,
      instructions: filteredInstructions,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <UploadColumn>
        <Title>Recipe data</Title>

        <InputWrapper>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Recipe title" minLength={2} required />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="ready_in_minutes">Prep time (min)</label>
          <input type="number" name="ready_in_minutes" id="ready_in_minutes" placeholder="Minutes to prepare" min={1} required />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="servings">Servings</label>
          <input type="number" name="servings" id="servings" placeholder="Number of servings" min={1} required />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="photo">Recipe photo</label>
          <input type="file" name="photo" id="photo" accept="image/jpeg,image/png,image/gif" onChange={handlePhotoChange} required />
        </InputWrapper>

        {photoPreview && <PhotoPreview src={photoPreview} alt="Recipe preview" />}
      </UploadColumn>

      <UploadColumn>
        <Title>Ingredients</Title>

        {ingredients.map((ing, i) => (
          <InputWrapper key={i} className="ingredient-row">
            <label>Ingredient {i + 1}</label>
            <div className="ingredient-fields">
              <input
                type="text"
                placeholder="Name"
                value={ing.name}
                onChange={e => handleIngredientChange(i, 'name', e.target.value)}
                required={i === 0}
              />
              <input
                type="text"
                placeholder="Unit"
                value={ing.unit}
                onChange={e => handleIngredientChange(i, 'unit', e.target.value)}
              />
              <input
                type="number"
                placeholder="Amount"
                value={ing.amount}
                min={0}
                step="0.01"
                onChange={e => handleIngredientChange(i, 'amount', e.target.value)}
              />
              {ingredients.length > 1 && (
                <AddRemoveBtn type="button" onClick={() => setIngredients(ingredients.filter((_, idx) => idx !== i))}>
                  <IoRemoveOutline size={16} />
                </AddRemoveBtn>
              )}
            </div>
          </InputWrapper>
        ))}

        <AddRemoveBtn type="button" className="add-btn" onClick={() => setIngredients([...ingredients, { name: '', unit: '', amount: '' }])}>
          <IoAddOutline size={16} /> Add ingredient
        </AddRemoveBtn>
      </UploadColumn>

      <UploadColumn>
        <Title>Instructions</Title>

        {instructions.map((ins, i) => (
          <InputWrapper key={i}>
            <label>Step {i + 1}</label>
            <div className="instruction-row">
              <textarea
                placeholder={`Describe step ${i + 1}...`}
                value={ins.step}
                rows={3}
                onChange={e => handleInstructionChange(i, e.target.value)}
                required={i === 0}
              />
              {instructions.length > 1 && (
                <AddRemoveBtn type="button" onClick={() => setInstructions(instructions.filter((_, idx) => idx !== i))}>
                  <IoRemoveOutline size={16} />
                </AddRemoveBtn>
              )}
            </div>
          </InputWrapper>
        ))}

        <AddRemoveBtn type="button" className="add-btn" onClick={() => setInstructions([...instructions, { step: '' }])}>
          <IoAddOutline size={16} /> Add step
        </AddRemoveBtn>
      </UploadColumn>

      <button type="submit">
        <span>Upload </span>
        <IoCloudUploadOutline size={26} />
      </button>
    </Form>
  );
}
