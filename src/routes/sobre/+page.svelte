<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<section class=" flex h-[30rem] px-10 lg:h-[55rem] lg:justify-around">
  <enhanced:img
    src="/src/lib/assets/img/extras/mini-astro.png"
    alt="mini astro"
    class="hidden lg:flex lg:w-[35rem]"
  />

  <div
    class="flex w-[55rem] flex-col items-center justify-center gap-5 lg:gap-10"
  >
    <h1
      class="variant-glass-surface fontSpace flex items-center justify-center rounded-xl px-5 pt-2 text-center text-2xl lg:text-4xl"
    >
      Matriz
    </h1>
    <p class="text-md p-5 text-justify lg:text-2xl">
      <a
        href="https://www.google.com/maps/place/R.+Manoel+Ant%C3%B4nio+de+Barros,+290+-+Centro,+Santa+Cruz+do+Sul+-+RS,+96825-000"
      >
        R. Manoel Antônio de Barros, 290 - Centro, Santa Cruz do Sul - RS,
        96825-000
      </a>
    </p>
    <h1
      class="variant-glass-surface fontSpace flex items-center justify-center rounded-xl px-5 pt-2 text-center text-2xl lg:text-4xl"
    >
      Filiais
      <p class="text-md p-5 text-justify lg:text-2xl">
        R. Cláudio Manoel, 34 - Centro, Vera Cruz - RS, 96880-000 R. Ramiro
        Barcelos, 511 - Centro, Agudo - RS, 96540-000 R. Andrade Neves, 545 -
        Centro, Rio Pardo - RS, 96640-000 Av. Pereira Rêgo, 1545 - Centro,
        Candelária - RS, 96930-000
      </p>
    </h1>
  </div>
</section>
