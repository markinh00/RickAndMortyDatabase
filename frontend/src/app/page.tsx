"use server"

import { redirect, RedirectType } from "next/navigation";

export default async function HomePage() {
    redirect('/characters', RedirectType.replace);
}
