import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import ReplyMessage from "components/adds/ReplyMessage";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

export default () => {
  const [show, setshow] = useState(false);
  const [type, settype] = useState();
  const verify = () => {
    if (
      document.getElementById("name-input").value === "" &&
      document.getElementById("email-input").value === "" &&
      document.getElementById("message-input").value === ""
    ) {
      alert("Please fill all the fields");
    }
    if (
      document.getElementById("name-input").value === "test" &&
      document.getElementById("email-input").value === "test" &&
      document.getElementById("message-input").value === "test"
    ) {
      settype(1);
      setshow(true);
    } else {
      settype(0);
      setshow(true);
    }
  };

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Send a 'Message'</h2>

            <TwoColumn>
              <Column>
                <InputContainer>
                  <Label htmlFor="name-input">Your Name</Label>
                  <Input
                    id="name-input"
                    type="text"
                    name="name"
                    placeholder="E.g. John Doe"
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="email-input">Your Email Address</Label>
                  <Input
                    id="email-input"
                    type="email"
                    name="email"
                    placeholder="E.g. john@mail.com"
                  />
                </InputContainer>
              </Column>
              <Column>
                <InputContainer tw="flex-1">
                  <Label htmlFor="name-input">Your Message</Label>
                  <TextArea
                    id="message-input"
                    name="message"
                    placeholder="E.g. Details about your event"
                  />
                </InputContainer>
              </Column>
            </TwoColumn>

            <SubmitButton onClick={verify}>Submit</SubmitButton>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
      {show && <ReplyMessage setshow={setshow} type={type} />}
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1u-ZSpMjBpgS9T2vJiQYurch5m4fxnfY&ehbc=2E312F"
        width="100%"
        height="550"
      ></iframe>
    </Container>
  );
};
