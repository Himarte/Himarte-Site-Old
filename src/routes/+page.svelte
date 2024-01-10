<script lang="ts">
    // imagens planetas
    import PrecoVenus from "$lib/assets/components/CardPrecos/PrecoVenus.svelte";
    import PrecoSaturno from "$lib/assets/components/CardPrecos/PrecoSaturno.svelte";
    import PrecoMarte from "$lib/assets/components/CardPrecos/PrecoMarte.svelte";
    import PrecoJupiter from "$lib/assets/components/CardPrecos/PrecoJupiter.svelte";
    import PrecoUrano from "$lib/assets/components/CardPrecos/PrecoUrano.svelte";
    import PrecoPlutao from "$lib/assets/components/CardPrecos/PrecoPlutao.svelte";
    // imagens parceiros
    import imgMedlife from "$lib/assets/img/parceiros/logo-medlife.svg";
    import imgSicredi from "$lib/assets/img/parceiros/logo-sicredi.svg";
    import imgRbs from "$lib/assets/img/parceiros/logo-rbs.svg";
    import imgUnimed from "$lib/assets/img/parceiros/logo-unimed.svg";

    import MainImg from "$lib/assets/img/extras/hi-astronauta-main.png";
    import MiniAstro from "$lib/assets/img/extras/mini-astro.png";
    import Wave1t from "$lib/assets/img/extras/wave1t 2.svg";

    export let y: number;

    let frase = "O FUTURO É AQUI";
    let fraseDigitada = "";
    let i = 0;
    let typewriter: any;

    const typeChar = () => {
        if (i < frase.length) {
            fraseDigitada += frase[i];
            i += 1;
        } else {
            clearInterval(typewriter);
        }
    };

    const digitando = () => (typewriter = setInterval(typeChar, 130));

    digitando();
</script>

<svelte:window bind:scrollY={y} />

<picture
    class="flex h-screen items-end justify-center bg-cover bg-center bg-no-repeat pb-40"
    style="background-image: url({MainImg}) "
>
    <p class="fontSpace text-center text-2xl font-bold md:text-6xl">
        {fraseDigitada}
    </p>
</picture>

<img src={Wave1t} alt="Wave1" class="flex w-full" />

<section class="flex flex-col items-center justify-center gap-10 p-10 md:pt-20">
    <div class="flex flex-col gap-10 md:flex-row">
        <PrecoSaturno />
        <PrecoJupiter />
        <PrecoMarte />
    </div>
    <div class="flex flex-col gap-10 md:flex-row">
        <PrecoUrano />
        <PrecoVenus />
        <PrecoPlutao />
    </div>
</section>

<section class="flex flex-col gap-10 py-16">
    <h3 class="fontSpace flex items-center justify-center text-center text-2xl md:text-4xl">
        Nossos clientes
    </h3>
    <div class="flex flex-wrap items-center justify-center gap-4">
        <img
            src={imgMedlife}
            alt="Logo Medlife"
            class=" card flex w-40 items-center justify-center rounded-3xl"
        />
        <img
            src={imgSicredi}
            alt="Logo Sicredi"
            class="  card flex w-40 items-center justify-center rounded-3xl"
        />
        <img
            src={imgRbs}
            alt="Logo RBS"
            class="  card flex w-40 items-center justify-center rounded-3xl p-3"
        />
        <img
            src={imgUnimed}
            alt="Logo unimed"
            class=" card flex w-40 items-center justify-center rounded-3xl"
        />
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4">
        <img
            src={imgMedlife}
            alt="Logo Medlife"
            class=" card flex w-40 items-center justify-center rounded-3xl"
        />
        <img
            src={imgSicredi}
            alt="Logo Sicredi"
            class="  card flex w-40 items-center justify-center rounded-3xl"
        />
        <img
            src={imgRbs}
            alt="Logo RBS"
            class="  card flex w-40 items-center justify-center rounded-3xl p-3"
        />
        <img
            src={imgUnimed}
            alt="Logo unimed"
            class=" card flex w-40 items-center justify-center rounded-3xl"
        />
    </div>
</section>
<section class=" flex h-[36rem] px-5 md:px-10 md:h-[50rem] md:justify-around">
    <img src={MiniAstro} alt="mini astro" class="hidden md:flex md:w-[35rem]" />

    <div class="flex w-[55rem] flex-col items-center justify-center gap-5 md:gap-10">
        <h1 class=" fontSpace flex items-center justify-center text-center text-2xl md:text-4xl">
            Quem somos?
        </h1>
        <p class="text-md p-5 text-justify md:text-2xl">
            Bem-vindo à Himarte, sua porta de entrada para o futuro digital! Somos mais do que um
            provedor de internet, somos pioneiros em conectividade. Na Himarte, a experiência do
            cliente é nossa prioridade, e nosso compromisso com a mais alta qualidade reflete-se em
            cada byte que entregamos. Exploramos novos horizontes no universo digital, não apenas
            oferecemos internet confiável, mas convidamos você a "Dizer Hi para o futuro".
        </p>
        <p class="text-md p-5 text-justify md:text-2xl">
            Na Himarte, <span class="uppercase underline decoration-primary-600">
                o futuro é aqui</span
            >!
        </p>
    </div>
</section>
