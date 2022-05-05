<x-layout>
    <x-slot name="titre">OSO | COMPTES</x-slot>
        <canvas id="bg"></canvas>
    <header class="p-3 py-4 bg-secondaire">
        <nav class="navbar navbar-expand-md d-flex flex-wrap justify-content-end align-items-center">
        <div class="m-auto">
        {{-- {{ $logo }} --}}
        <img src="./images/oso_logo_web_v-sml.png" alt="">
        </div>
                <h1 class="mt-1 mb-2 m-auto text-center">OBERG | ACCUEIL</h1>

                <div class="d-flex align-items-center justify-content-between right-side">
                    <div class="px-3"><a class="text-decoration-none" href="/#">À PROPOS</a></div>
                    <div class="px-3"><a class="text-decoration-none" href="/#">ACIVITÉS</a></div>
                    <div class="px-3"><a class="text-decoration-none" href="/#">RESTAURATION</a></div>
                    <div class="px-3"><a class="text-decoration-none" href="/#">CHAMBRES</a></div>
                    <div class="px-3"><a class="text-decoration-none" href="/#">FORFAITS</a></div>
                </div>
            </nav>
            {{-- <h1 class="mt-1 mb-2 m-auto text-center">OSO | ACCUEIL</h1> --}}
            <p class="text-center mb-1 m-auto">Nos Options</p>
            <p class="text-center mb-1 m-auto">Aujourd'hui: {{ $basic_date }} {{ $basic_time }}</p>
        </header>

        <main>
        <center class="mt-3"><img src="./images/oso_name-2.png" alt="" height="80"></center>
        <center class="mt-3 station"><img src="./images/station_img0.png" alt="" height="280"></center>
        <div class="container py-5">
            {{-- <img src="../images/oso_bigblock0.png" alt=""> --}}
            {{-- <h2 class="text-center text-color">ACTIVITÉS</h2> --}}
            <div class="row">
                @forelse($tours as $tour)
                <x-tour :tour="$tour" />
                @empty
                <h3>Aucune activité trouvée</h3>
                @endforelse
            </div>
            {{-- <div class="row">
                @forelse($styles as $style)
                <x-style :style="$style" />
                @empty
                <h3>Aucune publication trouvée</h3>
                @endforelse
            </div> --}}
        </div>
    </main>
            <script type="module" src="{{ asset('js/main.js') }}"></script>

    {{-- <script type="module" src="./js/main.js"></script> --}}
</x-layout>
