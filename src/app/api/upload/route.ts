import { NextResponse } from "next/server";
import { parseExcel } from "@/lib/parse-excel";
import { replaceTasks } from "@/lib/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No se recibió ningún archivo." }, { status: 400 });
    }

    const name = file.name.toLowerCase();
    if (!name.endsWith(".xlsx") && !name.endsWith(".xls")) {
      return NextResponse.json(
        { error: "Formato inválido. Sube un archivo .xlsx o .xls." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const tasks = parseExcel(buffer);

    if (!tasks.length) {
      return NextResponse.json(
        { error: "El archivo no contiene tareas reconocibles." },
        { status: 422 }
      );
    }

    const cut = new Date().toISOString().slice(0, 10);
    const payload = replaceTasks(tasks, cut);
    return NextResponse.json({ ok: true, count: tasks.length, dashboard: payload });
  } catch (err) {
    console.error("upload error", err);
    return NextResponse.json(
      { error: "No se pudo procesar el archivo Excel." },
      { status: 500 }
    );
  }
}
