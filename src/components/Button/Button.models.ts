type colors = 'red' | 'blue' | 'yellow' | 'green';

export interface IButtonProps {
  color: colors;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;

  theme?: any;
}
