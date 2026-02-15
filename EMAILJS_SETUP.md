# EmailJS Setup (Client-side, No Backend)

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add an Email Service (Gmail/Outlook/custom SMTP) and copy the **Service ID**.
3. Create an Email Template and include variables:
   - `from_name`
   - `phone`
   - `from_email`
   - `message`
   - `to_name`
   - `to_email`
4. Copy your **Template ID** and **Public Key**.
5. Create `.env` in project root based on `.env.example`:

```bash
cp .env.example .env
```

6. Fill the environment variables:

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_TO_NAME=Admissions Team
VITE_EMAILJS_TO_EMAIL=admissions@blueridgeacademy.edu
```

7. Restart the dev server after updating `.env`.

## Security notes
- Do not commit `.env`.
- Never hardcode keys inside components.
- Keep template fields minimal and validated before submission.
