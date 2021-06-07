import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import ContainerForm  from "../layout/form/ContainerForm";
import Heading from "../../components/layout/headings/Heading";
import Alert from "react-bootstrap/Alert";
import ErrorMessage from "../error/ErrorMessage";
import { MINIMUM_FIRST_NAME_CHARACTERS, MINIMUM_LAST_NAME_CHARACTERS,MINIMUM_MESSAGE_CHARACTERS, SUBJECT, DEFAULT_VALUES } from "../contact/registration/Registration";
import StyledBtn from "../layout/button/StyledBtn";



const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("Please enter your first name")
        .min(MINIMUM_FIRST_NAME_CHARACTERS, `Your first name must at be at least ${MINIMUM_FIRST_NAME_CHARACTERS} characters`),
    lastName: yup
        .string()
        .required("Please enter your last name")
        .min(MINIMUM_LAST_NAME_CHARACTERS, `Your last name must at be at least ${MINIMUM_LAST_NAME_CHARACTERS} characters`),
    email: yup
        .string()
        .required("Please enter your email address").email("Please enter a valid email address"),
    message: yup
        .string()
        .required("Please enter your message")
        .min(MINIMUM_MESSAGE_CHARACTERS, `Your message must at be at least ${MINIMUM_MESSAGE_CHARACTERS} characters`),
});

function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {

        console.log(data);
        
        setSubmitted(true);
        reset(DEFAULT_VALUES);
    }

    console.log(errors);

    return (
        <>
        <Heading title=" Contact" />
        <ContainerForm>
            {submitted && <Alert variant="success">Your registration was successful<span>  “Thank you for contacting us” </span></Alert>}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control placeholder="First Name" {...register("firstName")} />
                    <Form.Text>At least {MINIMUM_FIRST_NAME_CHARACTERS} characters</Form.Text>
                    {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                </Form.Group>
                <Form.Group>
                <Form.Control placeholder="Last Name" {...register("lastName")} />
                <Form.Text>At least {MINIMUM_LAST_NAME_CHARACTERS} characters</Form.Text>
                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
            </Form.Group>

                <Form.Group>
                    <Form.Control placeholder="Email" {...register("email")} />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group>
                    <Controller
                        name="subject"
                        control={control}
                        render={({ field }) => <Select one options={SUBJECT} {...field} />}
                    />
                </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" {...register("message")} />
              <Form.Text> At least {MINIMUM_MESSAGE_CHARACTERS} characters</Form.Text>
              {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </Form.Group>

            <StyledBtn  variant="info" type="submit">
                Submit
            </StyledBtn>
            </Form>
        </ContainerForm>
        </>
    );
}

export default ContactPage;