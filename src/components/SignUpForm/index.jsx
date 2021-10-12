import { useState } from 'react';
import { SubmitButton } from '../SubmitButton';
import { AppInput } from '../AppInput';
import { IoMaleOutline, IoFemaleOutline } from 'react-icons/io5';
import { Form, FlexRow } from './styles';

export function SignUpForm({ handleGetData }) {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState(1);
  const [profileImage, setProfileImage] = useState();

  function handleMaleChange(e) {
    const isChecked = e.target.checked;
    isChecked && e.target.value === 'male' && setGender(1);
  }

  function handleFemaleChange(e) {
    const isChecked = e.target.checked;
    isChecked && e.target.value === 'female' && setGender(0);
  }

  async function handleForm(e) {
    e.preventDefault();

    if (!name || !username || !email || !password || !profileImage) return;

    const form = new FormData();
    form.append('name', name);
    form.append('username', username);
    form.append('email', email);
    form.append('password', password);
    form.append('gender', gender);
    form.append('profile-photo', profileImage);

    return handleGetData(form);
  }

  return (
    <Form
      onSubmit={e => handleForm(e)}
      encType="multipart/form-data"
      method="POST"
    >
      <AppInput
        label="Escolha uma foto de perfil"
        inputType="file"
        inputId="profile-photo"
        handleChange={e =>
          setProfileImage(e.target.files.length > 0 && e.target.files[0])
        }
        isPhotoSelected={profileImage ? true : false}
        isRequired
      />

      <AppInput
        label="Qual é o seu nome?"
        inputType="text"
        inputId="name"
        placeholder="Nome"
        handleChange={e => setName(e.target.value.trim())}
        isRequired
      />

      <AppInput
        label="Digite um nome de usuário"
        inputType="text"
        inputId="username"
        placeholder="Nome de usuário"
        handleChange={e => setUsername(e.target.value.toLowerCase().trim())}
        isRequired
      />

      <AppInput
        label="Digite um email"
        inputType="email"
        inputId="email"
        placeholder="Email"
        handleChange={e => setEmail(e.target.value.trim())}
        isRequired
      />

      <AppInput
        label="Digite uma senha"
        inputType="password"
        inputId="password"
        placeholder="Senha"
        handleChange={e => setPassword(e.target.value)}
        isRequired
      />

      <FlexRow>
        <AppInput
          label={
            <>
              <IoMaleOutline size={26} /> Masculino
            </>
          }
          inputType="radio"
          inputName="gender"
          inputId="male"
          inputValue="male"
          handleChange={e => handleMaleChange(e)}
          isDefaultChecked
        />

        <AppInput
          label={
            <>
              <IoFemaleOutline size={26} /> Feminino
            </>
          }
          inputType="radio"
          inputName="gender"
          inputId="female"
          inputValue="female"
          handleChange={e => handleFemaleChange(e)}
        />
      </FlexRow>

      <SubmitButton>Registrar-se</SubmitButton>
    </Form>
  );
}
