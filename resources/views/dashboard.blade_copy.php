<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-white-800 leading-tight">
            {{ __('Accueil') }}
        </h2>
    </x-slot>
    <main>
        <div class="container py-5">
            <div class="row">
                @forelse($films as $film)
                <div class="col-lg-4 col-md-6 mb-3 post-container">
                    <div class="post" onclick="window.location.href ='/films/{{ $film->id }}'">
                        <img src="{{ $film->poster_path }}">
                        <div class="post-body">

                            <h6 class="text-center">
                                <a href="/title/{{ $film->title }}">{{ $film->title }}</a>
                            </h6>
                        </div>
                    </div>
                </div>
                @empty
                <h3>Aucune publication trouvée</h3>
                @endforelse
            </div>
        </div>
    </main>
<!-- <div class="container clearfix">
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    Vous êtes connecté!
                </div>
            </div>
        </div>
    </div>
</div> -->
</x-app-layout>
