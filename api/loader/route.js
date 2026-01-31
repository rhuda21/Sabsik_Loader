export default async function handler(request, response) {
  const GITHUB_URL = "https://raw.githubusercontent.com/TeamUBHub/UBLoader/refs/heads/main/index/Key.lua";
  try {
    const res = await fetch(GITHUB_URL);
    if (!res.ok) {
      return response.status(res.status).send("Failed to fetch from GitHub");
    }
    const luaContent = await res.text();
    response.setHeader('Content-Type', 'text/plain');
    return response.status(200).send(luaContent);
    
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
}