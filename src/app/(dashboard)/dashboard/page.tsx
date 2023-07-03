import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Logout from "~components/logout";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const { data } = await supabase.from("todos").select();

  return (
    <div>
      {session && <Logout />}
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}
