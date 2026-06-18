import fs from "fs";
import path from "path";
import { CUT_LABEL, MANAGEMENT_TASKS, PREVIOUS_PORTFOLIO, SEED_TASKS, TODAY } from "./data";
import { enrichAll } from "./enrich";
import type { DashboardPayload, RawTask } from "./types";

type State = {
  tasks: RawTask[];
  cut: string;
  today: string;
};

const STATE_FILE = path.join(process.cwd(), "data", "state.json");

function loadFromDisk(): State | null {
  try {
    if (fs.existsSync(STATE_FILE)) {
      const raw = fs.readFileSync(STATE_FILE, "utf-8");
      return JSON.parse(raw) as State;
    }
  } catch {
    // ignore read errors — fall back to seed
  }
  return null;
}

function saveToDisk(state: State) {
  try {
    fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), "utf-8");
  } catch (err) {
    console.warn("[store] Could not save state to disk:", err);
  }
}

const globalForStore = globalThis as unknown as { __dachaStore?: State };

const store: State =
  globalForStore.__dachaStore ??
  (globalForStore.__dachaStore = loadFromDisk() ?? {
    tasks: SEED_TASKS,
    cut: CUT_LABEL,
    today: TODAY,
  });

export function getDashboard(): DashboardPayload {
  return {
    cut: store.cut,
    today: store.today,
    tasks: enrichAll(store.tasks, store.today),
    previous: PREVIOUS_PORTFOLIO,
    management: MANAGEMENT_TASKS,
  };
}

export function replaceTasks(tasks: RawTask[], cut?: string): DashboardPayload {
  store.tasks = tasks;
  if (cut) store.cut = cut;
  saveToDisk(store);
  return getDashboard();
}
