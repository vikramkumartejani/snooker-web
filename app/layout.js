import "./globals.css";

export const metadata = {
  title: "Cue Keeper",
  description:
    "With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
