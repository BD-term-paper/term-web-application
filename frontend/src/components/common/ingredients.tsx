import { createSignal } from "solid-js";
import InnerList from "./inner-list";

type Ingredient = {
  id: number,
  name: string,
  description?: string,
  unit: { id: number, name: string }
}

const [choices, setChoices] = createSignal<number[]>([])

export default function IngredientsList() {
  return <InnerList
    path="ingredients"
    extractText={(item: Ingredient) => `${item.name} (${item.unit.name})`}
    choices={choices}
    setChoices={setChoices}
  />
}