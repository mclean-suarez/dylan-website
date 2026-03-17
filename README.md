# Ad On AI

Corporate website for Ad On AI, a specialist AI enablement division within the Ad On Group ecosystem.

Built with React 19, TypeScript, Vite 6, and Tailwind CSS 3.

## Setup

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key from [web3forms.com](https://web3forms.com). Required for the contact form to submit. |
| `VITE_CONTACT_TO_EMAIL` | Recipient email address (delivery address is configured in your Web3Forms dashboard). |

If the access key is missing, the contact form will display a friendly notice and the submit button will be disabled. No runtime errors are thrown.

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Testing the contact form

1. Ensure your `.env` file contains a valid `VITE_WEB3FORMS_ACCESS_KEY`.
2. Start the dev server with `npm run dev`.
3. Navigate to the Contact page.
4. Fill in all required fields (first name, last name, business email, business name, number of employees).
5. Click "Book My Strategy Call".
6. You should see a success confirmation. The submission will arrive at the email address configured in your Web3Forms dashboard.

To test the fallback UX, temporarily remove or comment out `VITE_WEB3FORMS_ACCESS_KEY` in your `.env` file, restart the dev server, and visit the Contact page. The submit button should be disabled with a notice directing visitors to email directly.
