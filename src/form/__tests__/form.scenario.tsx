import * as React from 'react';
import {Form, FormRef} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Button} from '../../button';
import {TextInput, TextInputSize} from '../../text-input';
import {Block} from '../../block';
import {Stack} from '../../stack';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const formRef = React.createRef<FormRef>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = async (data: any) => {
  await sleep(2000);
  // eslint-disable-next-line no-console
  console.log('Submitted data:', data);
};

const validateUserName = async (value: string) => {
  await sleep(1000);
  return value !== 'newskit' || 'This username is already taken';
};

export default {
  name: 'form',
  children: [
    {
      name: 'form-with-submit-validation',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Form</StorybookHeading>
          <Block>
            <StorybookSubHeading>
              Input validation mode: onSubmit
            </StorybookSubHeading>
            <Form onSubmit={onSubmit} ref={formRef}>
              <Block spaceStack="space050">
                <TextInput
                  label="Email"
                  name="email"
                  rules={{
                    required: 'Required field',
                    pattern: {
                      // eslint-disable-next-line no-useless-escape
                      value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                      message: 'Please provide a valid email',
                    },
                  }}
                />
              </Block>
              <Block spaceStack="space050">
                <TextInput
                  label="Username"
                  name="username"
                  rules={{
                    required: 'Required field',
                    minLength: {
                      value: 5,
                      message: 'Usernames must be at least 5 characters long',
                    },
                    validate: validateUserName,
                  }}
                />
                <select value='mercedes'>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
              </Block>

              <Button type="submit">Submit</Button>
              <Button onClick={()=>{ 
                formRef.current && formRef.current.reset()
              }}>Reset</Button>
              <Button onClick={()=>{ 
              // @ts-ignore
                formRef.current && formRef.current.resetValidation()
              }}>Reset Validation</Button>
              <Button onClick={()=>{ 
              // @ts-ignore
                formRef.current && formRef.current.clearErrors()
              }}>Clear Errors</Button>
            </Form>
          </Block>
        </React.Fragment>
      ),
    },
    {
      name: 'form-with-submit-validation-and-assistive-text',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Form</StorybookHeading>
          <Block>
            <StorybookSubHeading>
              onSubmit validation and assistive text
            </StorybookSubHeading>
            <Form onSubmit={onSubmit}>
              <Block spaceStack="space050">
                <TextInput
                  label="Email"
                  name="email"
                  assistiveText="Your email"
                  rules={{
                    required: 'Required field',
                    pattern: {
                      // eslint-disable-next-line no-useless-escape
                      value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                      message: 'Please provide a valid email',
                    },
                  }}
                />
              </Block>
              <Block spaceStack="space050">
                <TextInput
                  label="Username"
                  name="username"
                  assistiveText="Your username"
                  rules={{
                    required: 'Required field',
                    minLength: {
                      value: 5,
                      message: 'Usernames must be at least 5 characters long',
                    },
                    validate: validateUserName,
                  }}
                />
              </Block>
              <Button type="submit">Submit</Button>
            </Form>
          </Block>
        </React.Fragment>
      ),
    },
    {
      name: 'form-sizes',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Form with</StorybookHeading>
          <Block>
            <Stack
              flow="horizontal-center"
              stackDistribution="space-between"
              spaceInline="space070"
            >
              <Form onSubmit={onSubmit} validationMode="onBlur">
                <StorybookSubHeading>large text input</StorybookSubHeading>
                <Block spaceStack="space050">
                  <TextInput
                    size={TextInputSize.Large}
                    label="Email"
                    name="email"
                    assistiveText="Your email"
                    rules={{
                      required: 'Required field',
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        message: 'Please provide a valid email',
                      },
                    }}
                  />
                </Block>
                <Block spaceStack="space050">
                  <TextInput
                    size={TextInputSize.Large}
                    label="Username"
                    name="username"
                    assistiveText="Your username"
                    rules={{
                      required: 'Required field',
                      minLength: {
                        value: 5,
                        message: 'Usernames must be at least 5 characters long',
                      },
                      validate: validateUserName,
                    }}
                  />
                </Block>
                <Button type="submit">Submit</Button>
              </Form>
              <Form onSubmit={onSubmit} validationMode="onBlur">
                <StorybookSubHeading>medium text input</StorybookSubHeading>
                <Block spaceStack="space050">
                  <TextInput
                    size={TextInputSize.Medium}
                    label="Email"
                    name="email"
                    assistiveText="Your email"
                    rules={{
                      required: 'Required field',
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        message: 'Please provide a valid email',
                      },
                    }}
                  />
                </Block>
                <Block spaceStack="space050">
                  <TextInput
                    size={TextInputSize.Medium}
                    label="Username"
                    name="username"
                    assistiveText="Your username"
                    rules={{
                      required: 'Required field',
                      minLength: {
                        value: 5,
                        message: 'Usernames must be at least 5 characters long',
                      },
                      validate: validateUserName,
                    }}
                  />
                </Block>
                <Button type="submit">Submit</Button>
              </Form>
              <Form onSubmit={onSubmit} validationMode="onBlur">
                <StorybookSubHeading>small text input</StorybookSubHeading>
                <Block spaceStack="space050">
                  <TextInput
                    size={TextInputSize.Small}
                    label="Email"
                    name="email"
                    assistiveText="Your email"
                    rules={{
                      required: 'Required field',
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                        message: 'Please provide a valid email',
                      },
                    }}
                  />
                </Block>
                <Block spaceStack="space050">
                  <TextInput
                    size={TextInputSize.Small}
                    label="Username"
                    name="username"
                    assistiveText="Your username"
                    rules={{
                      required: 'Required field',
                      minLength: {
                        value: 5,
                        message: 'Usernames must be at least 5 characters long',
                      },
                      validate: validateUserName,
                    }}
                  />
                </Block>
                <Button type="submit">Submit</Button>
              </Form>
            </Stack>
          </Block>
        </React.Fragment>
      ),
    },
  ],
};
