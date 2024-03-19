import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  return new Response(
    JSON.stringify({
      message: "Form submission not implemented yet.",
      status: 500
    }),
    { status: 500 }
  );
};