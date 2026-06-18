import { Dashboard } from "@/components/dashboard/dashboard";
import { getDashboard } from "@/lib/store";

export const dynamic =
  process.env.STATIC_EXPORT === "true" ? "force-static" : "force-dynamic";

export default function Home() {
  const data = getDashboard();
  return <Dashboard initial={data} />;
}
