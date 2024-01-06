<script>
  import { CheckCircle, Plus } from "lucide-svelte";

  import planetaPlutao from "$lib/assets/img/panetas/plutao.svg";
</script>

<div
  class="relative flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border !border-primary-500/60 !bg-transparent p-6 hover:!border-primary-600"
>
  <img
    src={planetaPlutao}
    alt="Planeta Plutão"
    class="absolute bottom-[73%] left-[75%] w-28 rotate-12 hover:rotate-6"
  />
  <div>
    <h5 class=" text-4xl font-bold text-primary-600">Plutão</h5>
    <div class="flex flex-col items-baseline text-white">
      <span class="text-5xl font-extrabold tracking-tight"
        >60 <span class="text-3xl font-extrabold tracking-tight">MEGAS</span>
      </span>
      <span class="flex"><Plus color="#EF562F" /> ROTEADOR</span>
    </div>
  </div>

  <div class="flex flex-col">
    <span class="flex items-baseline justify-center text-white">
      <span class="text-2xl font-semibold text-primary-600">R$</span>
      <span class="text-4xl font-extrabold tracking-tight">59</span>
      <span class="text-2xl font-extrabold tracking-tight text-primary-600"
        >,</span
      >
      <span class="text-2xl font-extrabold tracking-tight">90</span>
      <span class="ms-1 text-xl font-normal text-gray-400">/Mes</span>
    </span>
    <button
      class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary"
      >Saber mais</button
    >
  </div>
</div>
