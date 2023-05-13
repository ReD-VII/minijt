import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
  padding: 10px;
  font-size: ${props => props.theme.fontSizes.medium};
  font-family: ${props => props.theme.fonts.primary};
  width: 300px;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  margin-bottom: 20px;
  padding: 10px;
  font-size: ${props => props.theme.fontSizes.medium};
  font-family: ${props => props.theme.fonts.primary};
  width: 300px;
  resize: none;
  height: 150px;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.medium};
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.text};
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: ${props => props.theme.fontSizes.medium};
  font-family: ${props => props.theme.fonts.primary};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #0055cc;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ContactForm() {
  const handleSubmit = event => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">Message:</Label>
        <TextArea id="message" name="message" required />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;