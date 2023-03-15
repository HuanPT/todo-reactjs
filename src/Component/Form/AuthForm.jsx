import React, { useState } from "react";
import { useAppContext } from "../../../AppContext";
import { login, signUp } from "../../services/auth.service";
import Button from "../Button/Button";
import FormContent from "./FormContent";
import FormItem from "./FormItem";
import Input from "./Input";

function LoginForm(/*{ onLoggedIn }*/) {
  const [userCredential, setUserCredential] = useState({});
  const { onLoggedIn } = useAppContext({}); // Credential, set..., isLoggedIn

  const handleChange = (e) => {
    setUserCredential({
      ...userCredential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(userCredential)
      .then((res) => {
        console.log(res);
        const headers = res.headers;
        const data = res.data;

        console.log(headers);
        // const authorization = headers.get("authorization");
        // console.log(authorization, data);

        const token = headers["authorization"];

        onLoggedIn(data, token);
        console.log(token, data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* <div className="form-field">
        <label htmlFor="password"></label>
        <input
          type="password"
          value={userCredential.password}
          name="password"
          onChange={handleChange}
          placeholder="password"
        />
      </div> */}

      <Input
        value={userCredential.username}
        name="username"
        onchange={handleChange}
        placeholder="username"
      />

      <Input
        type="password"
        name="password"
        value={userCredential.password}
        onchange={handleChange}
        placeholder="password"
      />
      <Button>Login</Button>
    </form>
  );
}

function SignUpForm() {
  const [createUser, setCreateUser] = useState({});

  const handleChange = (e) => {
    setCreateUser({
      ...createUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(createUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.request.responseText));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* <div className="form-field">
        <label htmlFor="password"></label>
        <input
          type="password"
          value={createUser.password}
          name="password"
          onChange={handleChange}
          placeholder="password"
        />
      </div> */}

      {/* Fullname */}
      <Input
        value={createUser.displayName}
        name="displayName"
        onchange={handleChange}
        placeholder="Full Name"
      />

      {/* username */}
      <Input
        value={createUser.username}
        name="username"
        onchange={handleChange}
        placeholder="username"
      />

      <Input
        type="password"
        value={createUser.password}
        name="password"
        onchange={handleChange}
        placeholder="password"
      />

      <Button>SignUp</Button>
    </form>
  );
}

const forms = [
  { title: "Login", form: <LoginForm /> },
  { title: "SignUp", form: <SignUpForm /> },
];

export default function AuthForm() {
  const [active, setActive] = useState(0);

  const header = forms.map((form, index) => (
    <FormItem
      key={index}
      isActive={index === active}
      onClick={() => setActive(index)}
    >
      {form.title}
    </FormItem>
  ));

  const content = forms.map((form, index) => (
    <FormContent key={index} isActive={index === active}>
      {form.form}
    </FormContent>
  ));

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: 20,
          marginBottom: 20,
        }}
      >
        {header}
      </div>
      <div>{content}</div>
      {/* <LoginForm />
      <SignUpForm /> */}
    </div>
  );
}
