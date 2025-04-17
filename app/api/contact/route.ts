export {}; 

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  services: string[];
}

export async function POST(req: Request) {
  try {
    
    const body: ContactFormData = await req.json();

    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbzm0KBLkVSPHXu0IJg5ox0xtY5N4MWdMgt89urDItgbLG_Vk8NuPKzGr6SK1HxG_K5rzQ/exec";

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.warn("Non-JSON response from Google Apps Script:", text);
      data = { result: "success", message: "Submitted (no JSON response)" };
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    let errorMessage = "Something went wrong";
    if (err instanceof Error) {
      errorMessage = err.message;
    }
  
    console.error("Proxy error:", errorMessage);
    return new Response(JSON.stringify({ result: "error", message: errorMessage }), {
      status: 500,
    });
  }
  
}
