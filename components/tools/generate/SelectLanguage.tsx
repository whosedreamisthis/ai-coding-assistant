import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { languages } from '@/data/examples';
interface SelectLanguageProps {
  value: string;
  onValueChange: (value: string) => void;
}

const SelectLanguage = ({ value, onValueChange }: SelectLanguageProps) => {
  return (
    <Select
      value={value.toLowerCase()}
      onValueChange={onValueChange}
      defaultValue={value.toLowerCase()}
    >
      <SelectTrigger className="my-2 text-white">
        <SelectValue
          placeholder="Select a language"
          className="text-white/80"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-white/80">Javascript</SelectLabel>
          {languages.map((language) => (
            <SelectItem
              className="text-white"
              key={language}
              value={language.toLowerCase()}
            >
              {language}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectLanguage;
