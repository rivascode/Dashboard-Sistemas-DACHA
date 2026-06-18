"use client";

import { Loader2, Upload } from "lucide-react";
import { useRef, useState } from "react";
import type { DashboardPayload } from "@/lib/types";

export function UploadButton({ onLoaded }: { onLoaded: (data: DashboardPayload) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setLoading(true);
    setError(null);
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Error al procesar el archivo.");
      onLoaded(json.dashboard as DashboardPayload);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <input
        ref={inputRef}
        type="file"
        accept=".xlsx,.xls"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
          e.target.value = "";
        }}
      />
      <button
        onClick={() => inputRef.current?.click()}
        disabled={loading}
        className="no-print inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/20 disabled:opacity-60"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
        {loading ? "Procesando…" : "Cargar Excel"}
      </button>
      {error && <span className="max-w-[220px] text-right text-xs text-rose-400">{error}</span>}
    </div>
  );
}
