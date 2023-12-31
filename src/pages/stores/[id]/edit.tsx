import { useRouter } from "next/router";

export default function StoresEditPage() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Stores Edit Page</div>;
}
