import { Dashboard } from "@/components/dashboard/dashboard";
import { getDashboard } from "@/lib/store";

export const dynamic = "force-dynamic";

export default function Home() {
  const data = getDashboard();
  return <Dashboard initial={data} />;
}
