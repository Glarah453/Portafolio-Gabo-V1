
import PortfolioHome from "@/components/portfolio/portfolio-home";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return <PortfolioHome currentYear={currentYear} />;
}
