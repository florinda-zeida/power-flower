import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import ErrorMessage from "../error/ErrorMessage";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import ContainerForm  from "../layout/form/ContainerForm";
import Form from 'react-bootstrap/Form';
import Alert from "react-bootstrap/Alert";





const url = BASE_URL + TOKEN_PATH;

console.log(url)

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const history = useHistory();

	const { register, handleSubmit, formState: {errors} } = useForm({
		resolver: yupResolver(schema),
	});

	const [auth,setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		// console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			history.push("/admin");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}



  

	return (
		<>
    <ContainerForm>
			<Form  onSubmit={handleSubmit(onSubmit)}>
				{loginError && <Alert variant="danger"><ErrorMessage>{loginError}</ErrorMessage></Alert>}
				<fieldset disabled={submitting}>
        <Form.Group>
					<Form.Label htmlFor ="username">Username</Form.Label>
			    <Form.Control {...register("username", { required: "This is required" })}
			    id="username" />
			    {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor ="password">Password</Form.Label>
          <Form.Control {...register("password", { required: "This is required" })}
          id="password" />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </Form.Group>
					<button className="btn">{submitting ? "Loggin in..." : "Login"}</button>
				</fieldset>
			</Form>
    </ContainerForm>
		</>
	);
}