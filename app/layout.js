import Footer from "@/components/Footer";
import "./globals.css";
import Theme from "@/components/Theme";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata = {
  title: "Anis's portfolio | Software Engineer",
  description:
    "Created and developed by Anis Khalfaoui using NextJs and Tailwind css | Software engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          {children}
        </Theme>
        <Footer />
      </body>
    </html>
  );
}
