import { redirect } from "next/navigation";

export default function BecomeASubRoute() {
  redirect("/contact-us?tab=subcontractor");
}
