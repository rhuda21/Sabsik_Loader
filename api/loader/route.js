export default async function handler(request, response) {
  const Loader = "https://raw.githubusercontent.com/TeamUBHub/UBLoader/refs/heads/main/index/Key.lua";
  try {
    const res = await fetch(Loader);
    if (!res.ok) {
      return response.status(res.status).send("Failed to fetch from GitHub");
    }
    const c= await res.text();
    response.setHeader('Content-Type', 'text/plain');
    return response.status(200).send(c);
    
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
}