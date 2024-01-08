<script>
    import LogoRodape from "$lib/assets/img/logos/logo-nome.png";
    import { Facebook, Instagram, Linkedin } from "lucide-svelte";
</script>

<footer class="flex flex-col justify-between md:h-36">
    <div class="flex flex-col md:flex-row md:px-10">
        <div class="flex flex-col items-center md:items-start md:w-1/3">
            <img src={LogoRodape} alt="Logo Himarte" class="w-32 md:w-36 h-8 md:h-10 mb-2" />
            <p class="px-5 md:px-0 text-sm fontSpace">O futuro é aqui</p>
        </div>

        <ul class="flex items-center p-8 md:p-0 gap-10 md:w-1/3 justify-center">
            <li>
                <a href="https://www.facebook.com/himarte.net/"><Facebook size={34} /></a>
            </li>
            <li><a href="https://www.instagram.com/himarte_net/"><Instagram size={34} /></a></li>
            <li>
                <a href="https://www.linkedin.com/company/himarte-net/"><Linkedin size={34} /></a>
            </li>
        </ul>
        <ul class="hidden md:flex flex-col gap-3 md:w-1/3 md:items-end">
            <li><a href="/sobre" class="text-primary-500 hover:text-primary-600">Sobre</a></li>
            <li>
                <a href="/contato" class="text-primary-500 hover:text-primary-600"
                    >Trabalhe conosco</a
                >
            </li>
            <li><a href="/sobre" class="text-primary-500 hover:text-primary-600">Filiais</a></li>
        </ul>
    </div>
    <p class="text-center text-sm">&copy;2024 Quiliao</p>
</footer>
