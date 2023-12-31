import { useRouter } from "next/router";
export default function StoresDetail() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Stores Detail : {id} Page</div>;
}
