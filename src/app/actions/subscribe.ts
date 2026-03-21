"use server";

export async function subscribeAction(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();

  if (!name || name.trim() === "") {
    return { error: "First name is required." };
  }

  if (!email || email.trim() === "") {
    return { error: "Email address is required." };
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Invalid email format." };
  }

  // Send data to Google Sheets Webhook
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error("[Newsletter] Webhook URL not configured");
    return { error: "Newsletter service is temporarily unavailable." };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const result = await response.json();
    
    if (result.error) {
       console.error("[Newsletter] Webhook returned error:", result.error);
       return { error: "Failed to subscribe. Please try again later." };
    }

    console.log(`[Newsletter] Successfully saved subscriber: ${name} (${email})`);
    return { success: true };
  } catch (err) {
    console.error("[Newsletter] Fetch error:", err);
    return { error: "Failed to connect to the subscription service." };
  }
}
