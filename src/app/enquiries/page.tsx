import { redirect } from "next/navigation";

export default function EnquiriesRoute() {
  redirect("/contact-us?tab=inquiries");
}
