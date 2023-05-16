import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import User from "@/components/user";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      <User />
    </div>
  );
}
