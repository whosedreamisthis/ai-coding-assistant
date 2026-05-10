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
    <Select>
      <SelectTrigger className="my-2">
        <SelectValue placeholder="Javascript" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Javascript</SelectLabel>
          {languages.map((language) => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectLanguage;
