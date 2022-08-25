export async function onRequestGet(request) {
  // ...
  const counter = await request.env.store.get("visitor");
  await request.env.store.put("visitor", parseInt(counter) + 1);
  return new Response(JSON.stringify({ count: parseInt(counter) + 1 }));
}
