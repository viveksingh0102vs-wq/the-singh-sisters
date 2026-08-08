import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, notes } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "viveksingh0102vs@gmail.com";

    console.log("=================================================");
    console.log("📩 NEW CONSULTATION FORM SUBMITTED");
    console.log(`To: ${recipientEmail}`);
    console.log(`From User: ${name} <${email}>`);
    console.log(`Topic: ${topic || "General Consultation"}`);
    console.log(`Notes: ${notes || "None"}`);
    console.log("=================================================");

    let emailSent = false;

    // Option A: Web3Forms (https://web3forms.com)
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (web3Key) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3Key,
            to_email: recipientEmail,
            subject: `New Study Abroad Inquiry from ${name}`,
            from_name: `${name} (The Singh Sisters Website)`,
            replyto: email,
            name,
            email,
            topic: topic || "Not specified",
            message: notes || "No notes provided",
          }),
        });
        const json = await res.json();
        if (json.success) {
          emailSent = true;
          console.log("✓ Web3Forms email notification delivered successfully.");
        }
      } catch (err) {
        console.error("Web3Forms error:", err);
      }
    }

    // Option B: Formspree (https://formspree.io)
    const formspreeKey = process.env.FORMSPREE_FORM_ID;
    if (!emailSent && formspreeKey) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            topic,
            notes,
            _replyto: email,
            _subject: `New Study Abroad Inquiry from ${name}`,
          }),
        });
        if (res.ok) {
          emailSent = true;
          console.log("✓ Formspree email notification delivered successfully.");
        }
      } catch (err) {
        console.error("Formspree error:", err);
      }
    }

    // Construct mailto URL for direct client-side fallback if needed
    const mailtoSubject = encodeURIComponent(`New Consultation Request from ${name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic || "General"}\nNotes: ${notes || "None"}`
    );
    const mailtoUrl = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    return NextResponse.json({
      success: true,
      message: "Thanks for visiting! We will get in touch with you soon.",
      emailSent,
      mailtoUrl,
      data: { name, email, topic, notes },
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { error: "Failed to process form submission." },
      { status: 500 }
    );
  }
}
