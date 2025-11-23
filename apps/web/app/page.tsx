import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <main>
      <h1>Welcome to the Web App!</h1>
      <h2>Registered first User:</h2>
      <ul>
        {user?.username}
        {user?.pasword}
      </ul>
    </main>
  );
} 