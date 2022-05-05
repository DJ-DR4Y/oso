<x-layout>
    <x-slot name="titre">OSO | COMPTES</x-slot>
    <header class="p-3 py-4 bg-secondaire">
        <nav class="navbar navbar-expand-md d-flex flex-wrap justify-content-end align-items-center">

            <div class="d-flex align-items-center justify-content-between right-side">
                <div class="px-3"><a class="text-decoration-none" href="/">ACCUEIL</a></div>
            </div>
        </nav>
        <h1 class="mt-1 mb-1 m-auto text-center">OSO | ACIVITÉS</h1>
        <p class="text-center mb-5 m-auto">Nos Activités</p>
    </header>
    <main>
        <div class="container py-5">

            <div class="row">
                @forelse($tours as $tour)
                <x-tour :tour="$tour" />
                @empty
                <h3>Aucune activité trouvée</h3>
                @endforelse
            </div>
        </div>
    </main>
</x-layout>
