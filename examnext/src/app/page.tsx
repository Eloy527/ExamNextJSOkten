import Image from "next/image";
import styles from "./page.module.css";
import { RecipesComponents } from "@/components/Recipes/RecipesComponents";

export default function Home() {
  return (
    <div>
      <RecipesComponents/>
    </div>
  );
}
