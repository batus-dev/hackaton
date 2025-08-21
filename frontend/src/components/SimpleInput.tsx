import { forwardRef } from 'react';

interface SimpleInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const SimpleInput = forwardRef<HTMLInputElement, SimpleInputProps>(
  ({ value, onChange, onKeyDown, placeholder, disabled }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          color: '#E6EDF7',
          fontSize: '16px',
          fontFamily: 'inherit',
          direction: 'ltr',
          textAlign: 'left',
          unicodeBidi: 'normal',
          writingMode: 'horizontal-tb'
        }}
      />
    );
  }
);

SimpleInput.displayName = 'SimpleInput';

export default SimpleInput;
