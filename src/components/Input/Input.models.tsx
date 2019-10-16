type InputTypes =
  | 'email'
  | 'number'
  | 'password'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url';

export interface IInputProps {
  type: InputTypes;
  theme?: any;
}
