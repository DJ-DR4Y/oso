<x-layout>
    <x-slot name="titre">OSO | COMPTES</x-slot>
    <header class="p-3 py-4 bg-secondaire">
        <nav class="navbar navbar-expand-md d-flex flex-wrap justify-content-end align-items-center">

            <div class="d-flex align-items-center justify-content-between right-side">
                <div class="px-3"><a class="text-decoration-none" href="/">Accueil</a></div>
            </div>
        </nav>
        <h1 class="mt-5 mb-3 m-auto text-center">OSO | COMPTES</h1>
        <p class="text-center mb-5 m-auto">Nos Options</p>
    </header>
    <main>
        <div class="container py-5">

            <div class="row">
                @forelse($users as $user)
                <x-user :user="$user" />
                @empty
                <h3>Aucune publication trouvée</h3>
                @endforelse
            </div>
        </div>
    </main>
</x-layout>
