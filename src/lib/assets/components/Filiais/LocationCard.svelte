<script lang="ts">
    interface Location {
        url: string;
        title: string;
        city: string;
        schedule: string;
        days: string;
    }

    export let location: Location;
</script>

<!-- promise was fulfilled -->
<div class="flex md:w-1/2 md:p-2">
    <a
        class="card md:flex card-hover md:w-full overflow-hidden border border-gray-200"
        href={location.url}
    >
        <header>
            <iframe
                class="map-frame"
                src={location.url}
                allowfullscreen={true}
                loading="lazy"
                referrerpolicy="no-referrer"
                title={location.title}
            ></iframe>
        </header>
        <div
            class="flex flex-col w-full py-20 md:py-0 justify-center items-center space-y-2 whitespace-nowrap"
        >
            <h3 class="h3 text-primary-500">{location.city}</h3>
            <h6 class="h6">{location.days}</h6>
            <h6 class="h6">{location.schedule}</h6>
        </div>
    </a>
</div>

<style>
    .map-frame {
        width: 400px;
        height: 300px;
        border: 0;
    }
</style>
