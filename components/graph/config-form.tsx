import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

export default function ConfigForm({
  name,
  email,
  onChange,
}: {
  name: string;
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex space-x-5 w-full">
      <div>
        <Input
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <span className={cn("text-sm text-muted-foreground")}>
          This should be same as your commit email address on Github
        </span>
      </div>
    </div>
  );
}
