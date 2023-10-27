import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Login() {
  return (
    <form >
      <fieldset className="flex flex-col gap-4 max-w-md">
        <legend className="text-2xl font-bold pb-4">Login</legend>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </fieldset>
    </form>
  )
}
