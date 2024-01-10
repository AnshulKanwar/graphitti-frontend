import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ConfigForm({
  name,
  email,
  year,
  onChange,
  onChangeYear,
}: {
  name: string;
  email: string;
  year: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeYear: (value: string) => void;
}) {
  const startYear = 2016;
  const currentYear = new Date().getFullYear();
  const yearsArray = Array.from(
    { length: currentYear - startYear + 1 },
    (_, idx) => idx + startYear
  );

  return (
    <div className="flex gap-3 w-full">
      <div className="grow">
        {/* <Label htmlFor="name">Name</Label> */}
        <Input
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
      </div>
      <div className="grow">
        {/* <Label htmlFor="email">Email</Label> */}
        <div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
          {/* <span className="text-sm text-muted-foreground">
            This should be same as your commit email address on Github
          </span> */}
        </div>
      </div>
      <div className="grow">
        <Select value={year.toString()} onValueChange={onChangeYear}>
          <SelectTrigger>
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            {yearsArray.reverse().map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* <span className="text-sm text-muted-foreground">
          Select the year where you want this art to show up on
        </span> */}
      </div>
    </div>
  );
}
