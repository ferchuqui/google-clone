import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'

interface Props{
    onChange: (language: string) => void
}

export const LanguageSelector = ({ onChange }: Props)=> {
return (
    <Form.Select 
      aria-label="Selecciona el idioma" 
      title="Selecciona el idioma" 
      onChange={(e) => onChange(e.target.value)}
    >

    <option value='auto'>Auto</option>
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
      <option key={key} value={key}>
        {literal}
      </option>
    ))}
  </Form.Select>
)
}